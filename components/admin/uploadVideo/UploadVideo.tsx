import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

interface UploadVideoProps {
    setVideoUrl: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

const UploadVideo: React.FC<UploadVideoProps> = ({ setVideoUrl }) => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setLoading(true);
        setProgress(0);

        // Show local preview
        const localPreview = URL.createObjectURL(file);
        setVideoPreview(localPreview);

        uploadToCloudinary(file);
    };

    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "estheva-polyclinic");
        formData.append("cloud_name", "dhmhoxppq");
        formData.append("resource_type", "video");

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.cloudinary.com/v1_1/dhmhoxppq/video/upload", true);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                setProgress(Math.round((event.loaded / event.total) * 100));
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                setVideoUrl(response.secure_url);
                setVideoPreview(response.secure_url);
            } else {
                console.error("Upload failed:", xhr.statusText);
            }
            setLoading(false);
            setProgress(0);
        };

        xhr.onerror = () => {
            console.error("Network error during upload");
            setLoading(false);
        };

        xhr.send(formData);
    };

    return (
        <div className="relative mb-6 block w-full cursor-pointer rounded border border-dashed border-primary bg-gray px-4 py-4">
            <input
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
            />
            <div className="flex flex-col items-center justify-center space-y-3">
                {videoPreview ? (
                    <video src={videoPreview} className="w-32 h-32 rounded-lg" controls />
                ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white">
                        📹
                    </span>
                )}
                <p>
                    <span className="text-primary">Click to upload</span> or drag and drop
                </p>
                <p className="mt-1.5">MP4, MOV supported</p>
                {loading && (
                    <div className="flex items-center space-x-2">
                        <CircularProgress size={24} />
                        <span>{progress}%</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadVideo;
