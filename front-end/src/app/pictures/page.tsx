"use client";

import styles from "./pictures.module.css";
import { IconImageDown } from "@/modules/app.modules";
import Image from "next/image";
import test from "../../../public/test/1733577396352.png"

export default function Pictures() {

  /* const [imgName, setImgName] = useState<string>("1733577396352.png");
  const [data, setData] = useState<string>("dd/mm");
  const [time, setTime] = useState<string>("00:00"); */

  const fakePictures = [
    {
      "data": "01/01",
      "time": "08:00",
      "imgName": "1733577396352.png"
    },
    {
      "data": "02/01",
      "time": "09:30",
      "imgName": "1733577396353.png"
    },
    {
      "data": "03/01",
      "time": "10:15",
      "imgName": "1733577396354.png"
    },
    {
      "data": "04/01",
      "time": "11:45",
      "imgName": "1733577396355.png"
    },
    {
      "data": "05/01",
      "time": "13:00",
      "imgName": "1733577396356.png"
    },
    {
      "data": "06/01",
      "time": "14:30",
      "imgName": "1733577396357.png"
    },
    {
      "data": "07/01",
      "time": "15:45",
      "imgName": "1733577396358.png"
    },
    {
      "data": "08/01",
      "time": "16:00",
      "imgName": "1733577396359.png"
    },
    {
      "data": "09/01",
      "time": "17:15",
      "imgName": "1733577396360.png"
    },
    {
      "data": "10/01",
      "time": "18:30",
      "imgName": "1733577396361.png"
    }
  ]

  return (
    <div className={styles.box}>
      <section className={styles.content}>

        <main className={styles.main}>
          <h1>
            Lista de imagens:
          </h1>

          <ul className={styles.ulCard}>
            {
              fakePictures.map((picture, index) => (
                <li key={index} className={`
                    ${styles.card}
                    border:solid-0.5:full:art-white-03
                    hover:bg:art-white-03`
                }>
                  <a className={styles.link} href="../../../test/1733577396352.png" download={picture.imgName} >

                    <div className={styles.cardContent}>
                      <div className={styles.infosBox}>
                        <Image style={{
                          "width": "80px",
                          "height": "80px",
                          "objectFit": "cover",
                          "borderRadius": "0.5rem"
                        }} src={test} alt="test" />

                        <div className={styles.data}>
                          <p className={`${styles.name} ft:color:art-black-01`}>{picture.imgName}</p>
                          <p className={`${styles.infos} ft:color:art-black-02`}>Infos: {picture.data} - {picture.time}</p>
                        </div>
                      </div>

                      <IconImageDown className="ft:color:art-black-01" />
                    </div>
                  </a>
                </li>
              ))
            }
          </ul>
        </main>
      </section>
    </div>
  );
}