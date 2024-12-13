import styles from "./InputPicture.module.css";

import { Button } from "../Button";
import { IconImageUp } from "@/modules/app.modules";

export function InputPicture() {
    return (
        <Button className="art-btn-medium art-border-solid-black-01:0.5:full art-bg-white-01 art-ft-black-01 art-bg-black-01:hover art-ft-white-01:hover">
            <label className={ `${styles.label} ` } id="picture">
                Selecionar imagem
                <IconImageUp/>
                <input className={styles.input} id="picture" type="file" accept="image/png, image/jpeg" />
            </label>
        </Button>
    );
}