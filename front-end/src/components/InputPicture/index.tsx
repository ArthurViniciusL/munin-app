import styles from "./InputPicture.module.css";

import { Button } from "../Button";
import { IconImageUp } from "@/modules/app.modules";

export function InputPicture() {
    return (
        <Button className="
            art:border:solid
            art:border:black-01
            art:border:s-01
            art:bg:white-01 
            art:ft:black-01
            
            art:hover:bg:black-01
            art:hover:ft:white-01
            ">
            <label className={`${styles.label} `} id="picture">
                Selecionar imagem
                <IconImageUp />
                <input className={styles.input} id="picture" type="file" accept="image/png, image/jpeg" />
            </label>
        </Button>
    );
}