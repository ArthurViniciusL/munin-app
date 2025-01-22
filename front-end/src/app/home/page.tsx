import { InputPicture } from "@/components/InputPicture";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.content}>
        <p className="">
          Selecione a sua imagem gerada na <span className="art:font:yellow-02 art:font:bold-03">Arte de fio a pavio</span>.
        </p>
        <InputPicture />
      </section>
    </>
  );
}
