"use client";

import Image from "next/image";
import { IconDownload } from "@/modules/app.modules";

import styles from "../../app/pictures/pictures.module.css";
import { DownloadImage } from "../Modal/DownloadImage";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";

export interface Picture {
    name: string;
    path: string;
    data: string;
    url: string;
}

interface ImageCardProps {
    pictures: Picture[]
}

export function ImageCard({ pictures }: ImageCardProps) {

    const { download, handleModal, setDownload } = useModal();
    const [picture, setPicture] = useState<Picture>();

    function handleDownload(picture: Picture) {
        setPicture(picture);
    }

    // ...event: React.MouseEvent<HTMLAnchorElement>
    useEffect(() => {
        async function downloadPicture(picture: Picture) {
            // event.preventDefault();
            if (picture && download) {
                try {
                    const responseFile = await fetch(picture.url);
                    const convertFile = await responseFile.blob();

                    const createBlobFile = URL.createObjectURL(convertFile);

                    const linkComponent = document.createElement("a");
                    linkComponent.href = createBlobFile;
                    linkComponent.download = picture.name || "picture";
                    document.body.appendChild(linkComponent);

                    linkComponent.click();

                    document.body.removeChild(linkComponent);

                    URL.revokeObjectURL(createBlobFile);

                    handleModal();
                    setDownload(false);
                } catch (error) {
                    console.error("Download error: ", error);
                }
            }
        }

        if (picture) {
            downloadPicture(picture);
        }

        // handleDownload(picture)

    }, [download])

    return (
        <DownloadImage>
            <ul className={styles.box} onClick={handleModal}>
                {
                    pictures.map((picture: Picture, index) => (
                        <li key={index} className={`
                ${styles.card}
                art:border:solid
                art:border:s-01
                art:bg:white-01
                art:border:white-03
                art:border:r-02
                art:hover:bg:white-03
              `}>
                            <a /* event */
                                onClick={() => handleDownload(picture)}
                                className={`${styles.cardContent}`}
                                title={picture.name}
                            >
                                <div className={`${styles.cardItems}`}>
                                    <Image className={`${styles.image}`} src={picture.url} alt={picture.name} priority={true} width={60} height={60} />
                                    <div className={styles.data}>
                                        <p className={`${styles.name} art:ft:black-01`}>{picture.name}</p>
                                        <p className={`${styles.infos} art:ft:black-02`}>Infos: {picture.data}</p>
                                    </div>
                                </div>
                                <IconDownload className="art:ft:black-01" size={22} />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </DownloadImage>
    );
}