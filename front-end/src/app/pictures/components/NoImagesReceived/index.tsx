import styles from './NoImagesReceived.module.css';
import Image from "next/image";
import marjo_tom from "@/assets/images/no_listed_images.svg";

export function NoImagesReceived() {
    return (
        <>
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
                <Image className={`${styles.marjoTom} mac:motion:ease-in-out-infinite:[R:-10deg]`} src={marjo_tom} priority={true} alt={'asset no listed images'} />
            </div>
        </>
    );
}