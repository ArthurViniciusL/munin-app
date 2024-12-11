import styles from "./home.module.css";

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className={styles.box}>
      <section className={styles.content}>
        <p>
          Selecione a sua imagem da <span className={styles.msg}>Arte de fio a pavio</span>.
        </p>
        <Button className="art-bg-white-02 art-bg-black-01:hover art-ft-white-01:hover art-btn-medium">
          Teste button
          <input type="file" accept="image/png, image/jpeg" />
        </Button>
      </section>

    </div>
  );
}
