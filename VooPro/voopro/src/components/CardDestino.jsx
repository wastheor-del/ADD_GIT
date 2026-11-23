import Image from 'next/image';
import styles from './CardDestino.module.css';

export default function CardDestino({destino}){
    return(
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={destino.imagem}
                    alt={destino.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{destino.nome}</h2>
                <p className={styles.description}>{destino.descricao}</p>

            </div>
        </article>
    );
}
