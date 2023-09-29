import { IPin } from "~/lib/utils";
import Image from 'next/image';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from './style.module.css';

export interface PhotoProps {
    marker: IPin;
    isSelected: boolean;
}

export default function Photo({marker, isSelected} : PhotoProps) {
    const tripFolder = marker.photo.split("/")[1];
    const fileName = marker.photo.split("/")[2];
    console.log("isSelected: " + isSelected + " for " + fileName);
    const [isApiCalled, setIsApiCalled] = useState(false);
    const [objectData, setObjectData] = useState<string | null>(null);

    useEffect(() => {
        if (!isSelected || isApiCalled) {
            return;
        }

        axios
            .get(`http://127.0.0.1:5000/api/trips/markers/get-object?tripFolder=${tripFolder}&fileName=${fileName}`)
            .then((response) => {
                // Handle a successful response
                setObjectData(response.data);
                setIsApiCalled(true);
                console.log("Called S3 api for " + tripFolder + "/" + fileName);
            })
            .catch((error) => {
                console.error('Error fetching object data:', error);
            });
    }, [isSelected]);

    // call api for first image

    // once API successful, display image for rest

    
    return (
        <div>
            {isApiCalled ? (
                <Image
                    alt={`${marker.author} at ${marker.city}`}
                    src={objectData}
                    fill
                    className={styles.image}
                />
            ) : (
                <p>Loading Image...</p>
            )}
        </div>
    );
};

const handleGetImage = async (tripFolder, fileName) => {
    try {
        const response = await fetch(`/get-object?tripFolder=${tripFolder}&fileName=${fileName}`);
        
        if (response.ok) {
            // Get the image data
            const imageBlob = await response.blob();
            
            // Create a URL for the image data
            const imageUrl = URL.createObjectURL(imageBlob);
            
            // Now, you can use `imageUrl` to display the image in your component
            // For example, you can set it as the source of an image element
            // or use it as a background image.
            console.log("Image URL:", imageUrl);
        } else {
            console.error("Failed to fetch image:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching image:", error);
    }
};