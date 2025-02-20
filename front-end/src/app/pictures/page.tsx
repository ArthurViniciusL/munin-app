'use client';

import styles from "./pictures.module.css";
import { useCallback, useEffect, useState } from "react";
import { PicturesForDownload } from "@/components/PicturesForDownload";
import { NoImagesReceived } from "./components/NoImagesReceived";

export default function Pictures() {

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
  }, []);

  useEffect(() => {
    setTimeout(fetchData, 600)
  }, []); /* melhorar a reatividade da requisição. Talvez usar o react query */

  return (
    <>
      <section className={styles.content}>
        {
          dataState.length > 0 ?
            <>
              <h1>
                Lista de imagens:
              </h1>
              <PicturesForDownload pictures={dataState} />
            </>
            :
            <NoImagesReceived />
        }
      </section>
    </>
  );
}