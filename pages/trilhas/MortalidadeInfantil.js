import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@ampliasaude/mortalidade-infantil-v5";
import { useRouter } from "next/router";
import { menuListener, adjustObservableWidth } from "../../components/utils";

function MortalidadeInfantil({copyLinkRef}) {
  const visRef = useRef();
  const mpRef = useRef();
  const div_controlesRef = useRef();
  const styleRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const runtime = new Runtime();
    let main = runtime.module(notebook, name => {
      if (name === "mp") return menuListener(new Inspector(mpRef.current),router);
      if (name === "vis") return new Inspector(visRef.current);
      if (name === "div_controles") return new Inspector(div_controlesRef.current);
      if (name === "style") return new Inspector(styleRef.current);
      if (name === "copyLinkButton") {
        return {
          fulfilled(value) {
            setTimeout(()=>{
              copyLinkRef.current.replaceChildren(value);
            })
          }
        }
      }
      return ["menu_municipios","barra_municipios","gPESO","funcoesGeradoras","gROBSON","gTOTAL","checkFiltros","onfirstload","getCurrentConf","cabecalho"].includes(name);
    });
    adjustObservableWidth(visRef, main);
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
MortalidadeInfantil.tipo = "trilha";

export default MortalidadeInfantil;
