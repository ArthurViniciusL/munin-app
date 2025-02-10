"use client";

import { InputPicture } from "@/components/InputPicture";
import styles from "./home.module.css";
import { useState } from "react";
import Image from "next/image";
import astronaut from "@/assets/images/send_image.svg";
import { CircleOff } from "lucide-react";

export default function Home() {

  const [uploadConfirmed, setUploadConfirmed] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const [acceptedFormat, setAcceptedFormat] = useState<boolean>(true);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const uploadFile = event.target.files?.[0];
    if (uploadFile != undefined) {
    }
    if (uploadFile) {
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
    } else {
      setAcceptedFormat(false);
    }
  }

  return (
    <>
      <section className={styles.content}>
        {
          uploadConfirmed ?
            <>
              <Image className='mac:motion:ease-in-out-infinite:[R:-10deg]' src={astronaut} width={300} alt='astronaut send image' priority={true} />
              <p className="art:font:semibold">
                Imagem enviada com sucesso!
              </p>
            </>
            :
            <>
              {acceptedFormat ?
                <p className="">
                Selecione a sua imagem gerada na <span className="art:font:yellow-02 art:font:bold">Arte de fio a pavio</span>.
              </p>
                :
                <div>
                  <CircleOff className="art:font:red-01"/>
                  <p className="
                  art:font:black-03
                  art:font:semibold
                  ">
                    Formato de arquivo inválido!
                  </p>
                </div>
              }
              
              <InputPicture onChange={handleUpload} />
            </>
        }
      </section>
    </>
  );
}
