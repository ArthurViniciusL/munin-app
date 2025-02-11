'use client';

import { SendImage } from "@/app/(home)/components/SendImage";
import styles from "./home.module.css";
import { useState } from "react";
import { MainTitle } from "./components/MainTitle";
import { InvalidFormat } from "./components/InvalidFormat";
import { Confirmation } from "./components/ConfirmationFeedback";

export default function Home() {

  const [file, setFile] = useState<File | null>(null);
  const [acceptedFormat, setAcceptedFormat] = useState<boolean>(true);
  //const { uploadIsConfirmed, setUploadIsConfirmed } = useUploadContext();
  const [uploadIsConfirmed, setUploadIsConfirmed] = useState<boolean>(false);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const uploadFile = event.target.files?.[0];

    if (uploadFile !== undefined) {
      setFile(uploadFile);
      upload(uploadFile);
    }
  }

  async function upload(uploadFile: File) {

    if (!uploadFile) {
      console.error(file);
    }

    const extension = (uploadFile.name).split('.').pop();

    if (extension === "png" || extension === "jpeg" || extension === "jpg") {
      const formData = new FormData();
      formData.append('file', uploadFile);

      try {
        const response = await fetch(process.env.NEXT_PUBLIC_UPLOAD as string, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          setUploadIsConfirmed(true);
        }

      } catch (error) {
        console.error('Upload Erro: ', error);
      }
    } else {
      setAcceptedFormat(false);
    }
  }

  return (
    <>
      <section className={styles.content}>
        {
          uploadIsConfirmed ?
            <>
              <Confirmation />
            </>
            :
            <>
              {
                acceptedFormat ?
                  <MainTitle />
                  :
                  <InvalidFormat />
              }

              <SendImage onChange={handleUpload} />
            </>
        }
      </section>
    </>
  );
}
