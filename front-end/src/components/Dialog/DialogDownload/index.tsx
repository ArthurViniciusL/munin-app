import { ReactNode, useEffect, useState } from "react";

import styles from "./DialogDownload.module.css";
import { Button } from "@/components/Button";
import { IconClose, IconImageDown } from "@/modules/app.modules";
import Image from "next/image";
import { getDownload } from "@/api/getDownload";
import { ImagePreview } from "@/components/ImagePreview";

interface DialogDownloadProps {
    data: any;
    state: boolean;
    setState: (state: boolean) => void;
    children: ReactNode;
}

export function DialogDownload({ data, state, setState, children }: DialogDownloadProps) {

    /* const pictureName = data?.name;
    const pictureUrl = data?.url; */
    const isOpen: boolean = state;

    const [downloadReleased, setDownloadReleased] = useState<boolean>(false);

    function handleMouseEnter() {
        setDownloadReleased(true);
    }
    function handleMouseLeave() {
        setDownloadReleased(false);
    }

    function handleDownloadReleased() {
        setDownloadReleased(true);
        getDownload(data);
        setTimeout(() => { setState(false) }, 600);
    }

    function closeDialog() {
        if (!downloadReleased) {
            setState(false);
        }
    }

    return (
        <>
            {
                isOpen ?
                    <>
                        <main className={`${styles.container} art:bg:black:20%`} onClick={closeDialog} >
                            <div className={`${styles.box}`}>
                                <div className={` ${styles.content} art:bg:white-02 art:border:r-02 art:border:solid art:border:s-01 art:border:white-03`}>
                                    <div className={styles.header}>
                                        <Button className={`art:bg:white-02 art:font:black-02 art:hover:bg:red-02 art:hover:no-dark:font:white-01`} onClick={closeDialog}>
                                            <IconClose size={14} />
                                        </Button>
                                    </div>
                                    <div className={`${styles.dialogMsg}`}>
                                        <h2 className='art:font:subtitle-02 art:font:semibold mac-ft-yellow-01'>Baixar imagem?</h2>
                                        <ImagePreview data={data}/>                                        
                                    </div>
                                    <div className={styles.buttons}>
                                        <Button
                                            onClick={closeDialog}
                                            className='art:btn:medium art:font:semibold art:font:red-01 art:bg:red:10% art:hover:bg:red-02 art:hover:font:white-01'>
                                            Cancelar
                                        </Button>

                                        <Button
                                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleDownloadReleased}
                                            className='art:btn:medium art:font:semibold art:font:black-01 art:bg:white-03 art:hover:bg:yellow-02 art:hover:no-dark:font:white-01 art:hover:border:remove'>
                                            Baixar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </>
                    :
                    <>

                    </>
            }
            {children}
        </>
    );
}