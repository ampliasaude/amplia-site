import '../styles/globals.css'
import Image from 'next/image';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="cabecalho">
        <Link href="/">
          <div className="logo">
            <Image src="/amplia-site/amplia.png" width={172} height={53}/>
          </div>
        </Link>
        <Link href="/mapa">
          <div className="botaoVisualizacao">
              <Image src="/amplia-site/mapa.svg" width={36} height={36} />
              <span>MAPA</span>
          </div>
        </Link>
        <Link href="/trilhas/NascidosVivos">
          <div className="botaoVisualizacao">
            <Image src="/amplia-site/trilhas.svg" width={36} height={36} />
            <span>TRILHAS</span>
          </div>
        </Link>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
