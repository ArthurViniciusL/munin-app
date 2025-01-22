"use client";

import styles from "./InputPicture.module.css";

import { Button } from "../Button";
import { IconImageUp } from "@/modules/app.modules";
import { useState } from "react";

export function InputPicture() {

    /* MOVER PARA O PAGE.TSX */

    const [file, setFile] = useState<File | null>(null);    

    async function upload(uploadFile: File) {
        if (!uploadFile) {
            console.error(file);
        }

        const formData = new FormData();
        formData.append('file', uploadFile);
        //console.log('FormData:', formData.get('file'));
        console.log()

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_UPLOAD as string, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('OK')
            }

        } catch (error) {
            console.error('Upload Erro: ', error);
        }
    }

    function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const uploadFile = event.target.files?.[0];
        if (uploadFile) {
            setFile(uploadFile);
            upload(uploadFile);
        }
    }
    /*
    useEffect(() => {
        console.log(file);
        if(file) {
            upload(file);
        }
    },[file]);
    */

    if(file) {
        return (
            <>
            Imagem enviada!
            </>
        );
    }

    return (
        <Button className="
            art:border:solid
            art:border:black-01
            art:border:s-01
            art:bg:white-01 
            art:font:black-01
            
            art:hover:bg:black-01
            art:hover:font:white-01
            ">
            <label className={`${styles.label} `} id="picture">
                Selecionar imagem
                <IconImageUp />
                <input onChange={handleUpload} className={styles.input} id="picture" type="file" accept="image/png, image/jpeg" />
            </label>
        </Button>
    );
}