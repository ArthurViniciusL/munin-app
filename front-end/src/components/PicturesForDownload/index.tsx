"use client";

import Image from "next/image";
import { IconDownload } from "@/modules/app.modules";

import styles from "./PicturesForDownload.module.css";
import { useState } from "react";
import { DialogDownload } from "../Dialog/DialogDownload";

export interface Picture {
    name: string;
    path: string;
    data: string;
    url: string;
}

interface PicturesForDownloadProps {
    pictures: Picture[]
}

export function PicturesForDownload({ pictures }: PicturesForDownloadProps) {

    const [picture, setPicture] = useState<Picture>();
    const [dialogState, setDialogState] = useState<boolean>(false);

    function handleDialogDownload() {
        setDialogState(!dialogState)
    }

    function handleDownload(picture: Picture) {
        setPicture(picture);
        setDialogState(true);
    }

    return (
        <DialogDownload data={picture} state={dialogState} setState={handleDialogDownload}>
            <ul className={styles.container}>
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
                            <a
                                onClick={() => handleDownload(picture)}
                                className={`${styles.cardContent}`}
                                title={picture.name}
                            >
                                <div className={`${styles.cardItems}`}>
                                    <Image className={`${styles.image}`} src={picture.url} alt={picture.name} priority={true} width={60} height={60} unoptimized={true} />
                                    <div className={styles.data}>
                                        <p className={`${styles.name} art:font:black-01`}>{picture.name}</p>
                                        <p className={`${styles.infos} art:font:black-02`}>Infos: {picture.data}</p>
                                    </div>
                                </div>
                                <IconDownload className="art:font:black-01" size={22} />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </DialogDownload>
    );
}