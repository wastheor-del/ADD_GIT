import { destinos } from "@/data/destinos";
import CardDestino from "@/components/CardDestino";
import styles from "./page.module.css"

export const metadata = {
    title: 'Destinos | VooPro',
};

export default function DestinosPage(){
    return(
        <div>
            <header className={styles.pageHeader}>
                <h1 className={styles.title}>Destinos em Destaque</h1>
                <p className={styles.subtitle}>Escolha seu próximo roteiro entre nossas recomendações</p>
            </header>

            <div className={styles.grid}>
                {destinos.map((destino) =>(
                    <CardDestino key={destino.id} destino={destino}/>
                ))}
            </div>
        </div>
    );
}

