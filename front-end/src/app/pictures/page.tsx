"use client";

import styles from "./pictures.module.css";
import { IconImageDown } from "@/modules/app.modules";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Picture {
  name: string;
  path: string;
  data: string;
}

export default function Pictures() {

  const [dataState, setDataState] = useState([]);

  // const [imgTest] = useState('/public/test/1733577396352.png');

  /* */

  console.log(dataState)


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

        <ul className={styles.box}>
          {
            dataState.map((picture: Picture, index) => (
              <li key={index} className={`
                ${styles.card}
                art:border:solid
                art:border:s-01
                art:bg:white-01
                art:border:white-03
                art:border:r-02
                art:hover:bg:white-03
              `}>
                <a className={`${styles.cardContent}`} href={picture.path} download={picture.name}>
                  <div className={`${styles.cardItems}`}>
                    <Image className={`${styles.image}`} src={picture.path} alt={picture.name} priority={true} width={60} height={60} />
                    <div className={styles.data}>
                      <p className={`${styles.name} art:ft:black-01`}>{picture.name}</p>
                      <p className={`${styles.infos} art:ft:black-02`}>Infos: {picture.data}</p>
                    </div>
                  </div>
                  <IconImageDown className="art:ft:black-01" size={30} />
                </a>
              </li>
            ))
          }
        </ul>
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