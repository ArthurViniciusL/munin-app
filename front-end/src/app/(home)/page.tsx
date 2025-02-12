'use client';

import { SendImage } from "@/app/(home)/components/SendImage";
import styles from "./home.module.css";
import { useState } from "react";
import { MainTitle } from "./components/MainTitle";
import { InvalidFormat } from "./components/InvalidFormat";
import { Confirmation } from "./components/ConfirmationFeedback";
import { setUpload } from "@/api/setUpload";

export default function Home() {

  const [file, setFile] = useState<File | null>(null);
  const [acceptedFormat, setAcceptedFormat] = useState<boolean>(true);
  const [uploadIsConfirmed, setUploadIsConfirmed] = useState<boolean>(false);

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const picture = event.target.files?.[0];

    if (picture !== undefined) {
      setFile(file);
      const { upload, format }:any = await setUpload(picture);      
      setAcceptedFormat(format);
      setUploadIsConfirmed(upload);
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
