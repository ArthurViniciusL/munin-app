"use client";

import { InputPicture } from "@/components/InputPicture";
import styles from "./home.module.css";
import { useState } from "react";

export default function Home() {

  const [uploadConfirmed, setUploadConfirmed] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  async function upload(uploadFile: File) {
    if (!uploadFile) {
      console.error(file);
    }

    const formData = new FormData();
    formData.append('file', uploadFile);
    //console.log('FormData:', formData.get('file'));

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_UPLOAD as string, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setUploadConfirmed(true);
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

  return (
    <>
      <section className={styles.content}>
        {
          uploadConfirmed ?
            <p className="art:font:semibold">
              Imagem enviada com sucesso!
            </p>
            :
            <>
              <p className="">
                Selecione a sua imagem gerada na <span className="art:font:yellow-02 art:font:bold">Arte de fio a pavio</span>.
              </p>
              <InputPicture onChange={handleUpload} />
            </>
        }
      </section>
    </>
  );
}
