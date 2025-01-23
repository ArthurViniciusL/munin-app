import Image from "next/image";
import { IconImageDown } from "@/modules/app.modules";

import styles from "../../app/pictures/pictures.module.css";

interface Picture {
    name: string;
    path: string;
    data: string;
    url: string;
}

interface CardDownloadProps {
    data: Picture []
}

export function CardDownload({ data }: CardDownloadProps) {

    async function handleDownload(event: React.MouseEvent<HTMLAnchorElement>, picture: Picture) {

        event.preventDefault();

        try {
            const responseFile = await fetch(picture.url);
            const convertFile = await responseFile.blob();

            const createBlobFile = URL.createObjectURL(convertFile);

            const linkComponent = document.createElement("a");
            linkComponent.href = createBlobFile;
            linkComponent.download = picture.name || "picture";
            document.body.appendChild(linkComponent);

            linkComponent.click();

            document.body.removeChild(linkComponent);

            URL.revokeObjectURL(createBlobFile);
        } catch (error) {
            console.error("Download error: ", error);
        }
    }

    return (
        <ul className={styles.box}>
            {
                data.map((picture: Picture, index) => (
                    <li key={index} className={`
                ${styles.card}
                art:border:solid
                art:border:s-01
                art:bg:white-01
                art:border:white-03
                art:border:r-02
                art:hover:bg:white-03
              `}>
                        <a
                            onClick={(event) => handleDownload(event, picture)}
                            className={`${styles.cardContent}`}
                            title={picture.name}
                        >
                            <div className={`${styles.cardItems}`}>
                                <Image className={`${styles.image}`} src={picture.url} alt={picture.name} priority={true} width={60} height={60} />
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
    );
}