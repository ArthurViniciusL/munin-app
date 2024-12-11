import Image from "next/image";
import styles from "./page.module.css";

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <p>
        Selecione a sua imagem da <span>Arte de fio a pavio</span>.
      </p>
      <Button className="art-bg-white-02 art-bg-black-01:hover art-ft-white-01:hover">
        Teste 1
      </Button>
      <input type="file" accept="image/png, image/jpeg" />

    </div>
  );
}
