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