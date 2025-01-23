"use client";

import { CardDownload } from "@/components/CardDownload";
import styles from "./pictures.module.css";


import { useEffect, useState } from "react";


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
      <section className={styles.content}>
        <h1>
          Lista de imagens:
        </h1>
        
        <CardDownload data={dataState} />
        
      </section>
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