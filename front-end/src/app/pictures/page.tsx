"use client";

import styles from "./pictures.module.css";
import { useEffect, useState } from "react";
import { ImageCard } from "@/components/ImageCard";
import { DownloadImageProvider } from "@/context/DownloadImageProvider";
import Image from "next/image";
import marjo_tom from "@/assets/images/no_listed_images.svg";


export default function Pictures() {

  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
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
    }
    fetchData();
  });

  if (dataState.length > 0) {
    return (
      <DownloadImageProvider>
        <section className={styles.content}>
          <h1>
            Lista de imagens:
          </h1>
          <ImageCard pictures={dataState} />
        </section>
      </DownloadImageProvider>
    );
  } else {
    return (
      <section className={styles.content}>
        <div className={styles.messageBox}>
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
          <Image className="mac:motion:ease-in-out-infinite:[R:-10deg]" src={marjo_tom} priority={true} alt={'asset no listed images'} width={500} />
        </div>

      </section>
    );
  }
}