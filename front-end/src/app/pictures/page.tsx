'use client';

import styles from "./pictures.module.css";
import { use, useCallback, useContext, useEffect, useState } from "react";
import { CardToDownload } from "@/components/CardToDownload";
import { DownloadImageProvider } from "@/context/DownloadImageContext";
import Image from "next/image";
import marjo_tom from "@/assets/images/no_listed_images.svg";
import { useUploadContext } from "@/context/UploadContext";

export default function Pictures() {
  const { uploadIsConfirmed, setUploadIsConfirmed } = useUploadContext();
  const [dataState, setDataState] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      //const PUBLIC_PICTURESS:string = process.env.NEXT_PUBLIC_PICTURES as string;
      const request = await fetch(process.env.NEXT_PUBLIC_PICTURES as string);
      if (request.ok) {
        const api = await request.json();
        setDataState(api.data);

      } else {
        throw new Error(`HTTP error! Status: ${request.status}`)
      }
    } catch (error) {
      console.error(error);
    }
  }, [])
  /*
  useEffect(() => {
    fetchData();
  },[uploadIsConfirmed])
  */

  // useEffect(() => {
  // const interval = setInterval(fetchData, 1000);
  // return () => clearInterval(interval);
  // fetchData();
  // }, [uploadIsConfirmed]);

  return (
    <>
      {
        dataState.length > 0 ?
          <section className={styles.content}>
            <h1>
              Lista de imagens:
            </h1>
            <CardToDownload pictures={dataState} />
          </section>

          :

          <section className={styles.content}>
            < div className={styles.messageBox}>

              <h1 className={`
              art:p-02
              art:font:Caveat-Brush
              art:font:title
              art:font:yellow-01
              mac:motion:ease-in-out-infinite:[Y:-30]
              ${styles.msgNoImage}
            `}>
                Nenhuma imagem recebida.
              </h1>
              <Image className={`${styles.marjoTom} mac:motion:ease-in-out-infinite:[R:-10deg]`} src={marjo_tom} priority={true} alt={'asset no listed images'} />
            </div>
          </section >
      }

    </>
  );
}