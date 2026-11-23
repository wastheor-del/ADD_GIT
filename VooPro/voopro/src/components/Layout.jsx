import Link from "next/link";
import styles from './Layout.module.css';

export default function Layout({children}){
    return(
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/" className={styles.logo}>
                        ✈️ VooPro
                    </Link>
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>
                            Início
                        </Link>
                        <Link href="/destinos" className={styles.navLink}>
                            Destinos
                        </Link>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} VooPro Viagens_Todos os direitos reservados</p>
            </footer>

        </div>
    );
}
