import styles from "./InputPicture.module.css";

import { Button } from "../Button";
import { IconImageUp } from "@/modules/app.modules";

interface InputPictureProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputPicture({onChange}:InputPictureProps) {

    /* MOVER PARA O PAGE.TSX */

    return (
        <Button className="
            art:border:solid
            art:border:black-01
            art:border:s-01
            art:bg:white-01 
            art:font:black-01
            
            art:hover:bg:black-01
            art:hover:font:white-01
            ">
            <label className={`${styles.label} `} id="picture">
                Selecionar imagem
                <IconImageUp />
                <input onChange={onChange} className={styles.input} id="picture" type="file" accept="image/png, image/jpeg" />
            </label>
        </Button>
    );
}