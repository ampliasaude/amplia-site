import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "bb9997bf0952f01b";
import { useRouter } from "next/router";
import menuListener from "../../components/menuListener";

function MortalidadeInfantil() {
  const visRef = useRef();
  const mpRef = useRef();
  const div_controlesRef = useRef();
  const styleRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "mp") return menuListener(new Inspector(mpRef.current),router);
      if (name === "vis") return new Inspector(visRef.current);
      if (name === "div_controles") return new Inspector(div_controlesRef.current);
      if (name === "style") return new Inspector(styleRef.current);
      return ["menu_municipios","barra_municipios","gPESO","funcoesGeradoras","gROBSON","gTOTAL","checkFiltros","onfirstload","getCurrentConf","copyLinkButton","cabecalho"].includes(name);
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

export default MortalidadeInfantil;
