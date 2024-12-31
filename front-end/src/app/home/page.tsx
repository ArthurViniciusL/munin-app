import { InputPicture } from "@/components/InputPicture";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.box}>
      <section className={styles.content}>
        <p className="">
          Selecione a sua imagem gerada na <span className={styles.msg}>Arte de fio a pavio</span>.
        </p>        
        <InputPicture/>
      </section>

    </div>
  );
}
