import { InputPicture } from "@/components/InputPicture";
import styles from "./home.module.css";

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className={styles.box}>
      <section className={styles.content}>
        <p className="art-ft-black-01">
          Selecione a sua imagem da <span className={styles.msg}>Arte de fio a pavio</span>.
        </p>        
        <InputPicture/>
      </section>

    </div>
  );
}
