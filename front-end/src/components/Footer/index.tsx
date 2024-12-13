import styles from "./footer.module.css";

export function Footer() {
    return (

        <footer className={` ${styles.footer} art-bg-white-02`}>

            <div className={styles.content}>
                <p className={`${styles.title} art-ft-black-01`}>
                    Desenvolvido por:
                </p>
                <a href="https://arthur-vsl.vercel.app/" target="_blank" className={styles.link}>
                    @Arthur.vsl
                </a>
            </div>

            <div className={styles.content}>
                <p className={`${styles.title} art-ft-black-01`}>
                    Mantido por:
                </p>
                <a href="https://museumaccg.org.br/" target="_blank" className={styles.link} >
                    MAC - Museu de Arte e Ciência de Campina Grande
                </a>
            </div>
        </footer>
    )
}