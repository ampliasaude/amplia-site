import '../styles/globals.css'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <Script 
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3192559,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}}
      />
      </Head>
      <div className="cabecalho">
        <Link href="/">
          <div className="logo">
            <Image src="/amplia-site/amplia.png" width={172} height={53}/>
          </div>
        </Link>
        <Link href="/mapa">
          <div className={"botaoVisualizacao"+(Component.tipo == "mapa"?" selected":"")}>
              <Image src="/amplia-site/mapa.svg" width={36} height={36} />
              <span>MAPA</span>
          </div>
        </Link>
        <Link href="/trilhas/NascidosVivos">
          <div className={"botaoVisualizacao"+(Component.tipo == "trilha"?" selected":"")}>
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
