import Link from "next/link";
import styles from './page.module.css';

export default function Home(){
  return(
    <section className={styles.hero}>
      <h1 className={styles.title}>Descubra o seu próximo destino com o VooPro</h1>
      <p className={styles.subtitle}>
        Explore roteiros selecionados, paisagens paradisíacas e culturas fascinantes ao redor do mundo
      </p>
      <Link href="/destinos" className={styles.ctaButton}>
        Explorar Destinos
      </Link>
    </section>
  );
}
