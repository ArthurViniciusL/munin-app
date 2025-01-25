"use client";

import { ImageCard } from "@/components/ImageCard";
import styles from "./pictures.module.css";


import { useEffect, useState } from "react";
import { DownloadImageProvider } from "@/context/DownloadImageProvider";

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
        <div style={{
          width: '100%',
          minHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p className="art:font:normal-02 art:font:black-03">Nenhuma imagem recebida.</p>
        </div>

      </section>
    );
  }
}