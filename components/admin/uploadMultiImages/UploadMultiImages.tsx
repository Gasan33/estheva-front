import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { VscError } from 'react-icons/vsc';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

interface UploadMultiImagesProps {
    setUrls: React.Dispatch<React.SetStateAction<string[] | null | undefined>>;
}

interface FileWithPreview {
    file: File;
    preview: string;
    progress: number;
    uploaded: boolean;
    url?: string;
}

const UploadMultiImages: React.FC<UploadMultiImagesProps> = ({ setUrls }) => {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

    useEffect(() => {
        if (uploadedUrls.length === files.length && uploadedUrls.length > 0) {
            setUrls(uploadedUrls); // Update parent component state only when all uploads complete
        }
    }, [uploadedUrls, files.length, setUrls]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []).map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
        }));

        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

        selectedFiles.forEach((fileObj, index) => compressAndUpload(fileObj, index));
    };

    const compressAndUpload = async (fileObj: FileWithPreview, index: number) => {
        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 800,
                useWebWorker: true,
            };
            const compressedFile = await imageCompression(fileObj.file, options);
            uploadFile(compressedFile, index);
        } catch (error) {
            // console.error('Compression error:', error);
        }
    };

    const uploadFile = (file: Blob, index: number) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'estheva-polyclinic');
        formData.append('cloud_name', 'dhmhoxppq');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/dhmhoxppq/image/upload`);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const progress = Math.round((event.loaded / event.total) * 100);
                setFiles((prevFiles) =>
                    prevFiles.map((f, i) =>
                        i === index ? { ...f, progress } : f
                    )
                );
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                setUploadedUrls((prevUrls) => [...prevUrls, response.secure_url]);

                setFiles((prevFiles) =>
                    prevFiles.map((f, i) =>
                        i === index ? { ...f, uploaded: true, url: response.secure_url } : f
                    )
                );
            } else {
                // console.error('Upload failed:', file);
            }
        };

        xhr.onerror = () => {
            // console.error('Error uploading:', file);
        };

        xhr.send(formData);
    };

    return (
        <div>
            {files.length > 0 && (
                <div className="grid grid-cols-4 mb-6 gap-4">
                    {files.map((file, index) => (
                        <div key={index} className="relative flex items-center justify-center">
                            <VscError className="absolute top-1 right-1 text-red-500 bg-white rounded-full h-6 w-6 cursor-pointer" />
                            <div className="relative w-16 h-16">
                                <Image
                                    src={file.preview}
                                    alt={`Preview ${index}`}
                                    height={200}
                                    width={200}
                                    className={`rounded-md w-full h-full object-cover ${file.uploaded ? 'opacity-100' : 'opacity-50'}`}
                                />
                                {!file.uploaded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                                        <CircularProgressbar
                                            value={file.progress}
                                            text={`${file.progress}%`}
                                            styles={{
                                                root: { width: '80%', height: '80%' },
                                                path: { stroke: `#3C50E0` },
                                                text: { fill: '#fff', fontSize: '14px' },
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div
                id="FileUpload"
                className="relative mb-6 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 sm:py-7.5"
            >
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                />
                <div className="flex flex-col items-center justify-center space-y-3">
                    <p>
                        <span className="text-primary">Click to upload</span> or drag and drop
                    </p>
                    <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                    <p>(max, 800 X 800px)</p>
                </div>
            </div>
        </div>
    );
};

export default UploadMultiImages;
