import styles from "./InputPicture.module.css";

import { Button } from "../Button";
import { IconImageUp } from "@/modules/app.modules";

export function InputPicture() {
    return (
        <Button className="
            border-full:solid-0.5:art-black-01
            bg:art-white-01 
            ft:color:art-black-01
            hover:bg:art-black-01
            hover:ft:color:art-white-01">
            <label className={`${styles.label} `} id="picture">
                Selecionar imagem
                <IconImageUp />
                <input className={styles.input} id="picture" type="file" accept="image/png, image/jpeg" />
            </label>
        </Button>
    );
}