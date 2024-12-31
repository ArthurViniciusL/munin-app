import styles from "./InputPicture.module.css";

import { Button } from "../Button";
import { IconImageUp } from "@/modules/app.modules";

export function InputPicture() {
    return (
        <Button className="
            art:border-style:solid
            art:border-color:black-01
            art:border-size:s-01
            art:bg:white-01 
            art:font-color:black-01
            
            art:hover:bg:black-01
            art:hover:font-color:white-01
            ">
            <label className={`${styles.label} `} id="picture">
                Selecionar imagem
                <IconImageUp />
                <input className={styles.input} id="picture" type="file" accept="image/png, image/jpeg" />
            </label>
        </Button>
    );
}