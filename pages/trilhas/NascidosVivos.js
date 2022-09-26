import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "c9796646f30224cb";
import menuListener from "../../components/menuListener";
import { useRouter } from "next/router";

function NascidosVivos() {
  
  const mpRef = useRef();
  const div_controlesRef = useRef();
  const visRef = useRef();
  const styleRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "mp") return menuListener(new Inspector(mpRef.current),router);
      if (name === "div_controles") return new Inspector(div_controlesRef.current);
      if (name === "vis") return new Inspector(visRef.current);
      if (name === "style") return new Inspector(styleRef.current);
      return ["menu_municipios","barra_municipios","gPESO","funcoesGeradoras","gPIG","gTOTAL","checkFiltros","onfirstload","getCurrentConf","copyLinkButton","cabecalho"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div className="blocoLocal" ref={div_controlesRef} />
      <div className="blocoMenu" ref={mpRef} />
      <div className="blocoTrilha" ref={visRef} />
      <div ref={styleRef} />
    </>
  );
}

export default NascidosVivos;
