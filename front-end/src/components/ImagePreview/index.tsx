import styles from "./ImagePreview.module.css"

import { IconImageDown } from "@/modules/app.modules";
import Image from "next/image";

interface ImagePreviewProps {
    data: any;
}

// className="art:border:r-02"

export function ImagePreview({ data }: ImagePreviewProps) {

    const pictureUrl = data?.url;
    const pictureName = data?.name;

    return (
        <>
            {
                data === undefined ?
                    <IconImageDown size={30} className={`art:font:black-03 art:bg:white-03 art:p-02 art:border:r-02`} />
                    :
                    <Image className={`${styles.image}`}  src={pictureUrl} alt={pictureName} priority={true} width={90} height={90} unoptimized={true} />
            }
        </>
    );
}