import './globals.css';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'VooPro | Portal de Viagens',
  description: 'Explore os melhores destinos turísticos do mundo com o VooPro',
};

export default function RootLayout({children}){
  return(
    <html lang='pt-BR'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}