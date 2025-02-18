import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

interface UploadImageProps {
    name: string;
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

const UploadImage: React.FC<UploadImageProps> = ({ setImageUrl, name }) => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setLoading(true);
        setProgress(0);

        // Compress image
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 800,
            useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);

        // Show preview
        const previewURL = URL.createObjectURL(compressedFile);
        setPreview(previewURL);

        const formData = new FormData();
        formData.append("file", compressedFile);
        formData.append("upload_preset", "estheva-polyclinic");
        formData.append("cloud_name", "dhmhoxppq");

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.cloudinary.com/v1_1/dhmhoxppq/image/upload");

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                setProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                setImageUrl(response.secure_url);
                setLoading(false);
            } else {
                console.error("Upload failed");
                setLoading(false);
            }
        };

        xhr.onerror = () => {
            console.error("Error uploading");
            setLoading(false);
        };

        xhr.send(formData);
    };

    return (
        <div className="flex flex-col items-center">
            {preview && (
                <div className="relative w-16 h-16 mb-4">
                    <Image src={preview} alt="Preview" width={64} height={64} className="rounded-md object-cover" />
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                            <CircularProgressbar value={progress} text={`${progress}%`} styles={{
                                path: { stroke: `#3C50E0` },
                                text: { fill: '#fff', fontSize: '14px' }
                            }} />
                        </div>
                    )}
                </div>
            )}
            <div className="relative block w-full cursor-pointer rounded border border-dashed border-primary bg-gray px-4 py-4">
                <input
                    name={name}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
                />
                <div className="flex flex-col items-center space-y-3">
                    <p><span className="text-primary">Click to upload</span> or drag and drop</p>
                    <p className="text-xs">SVG, PNG, JPG, or GIF (max: 800x800px)</p>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;
