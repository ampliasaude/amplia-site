import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "b05c33c572862dd7";
import { adjustObservableWidth } from "../../components/utils";

function Mapa() {

  const mainWindowRef = useRef();
  const allStylesRef = useRef();
  const stylesRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    let main = runtime.module(notebook, name => {
      if (name === "mainWindow") return new Inspector(mainWindowRef.current);
      if (name === "allStyles") return new Inspector(allStylesRef.current);
      if (name === "styles") return new Inspector(stylesRef.current);
      return ["clearMainWindow","panel","populate","afterInitialLayout","populateMapa","viewof dorling","viewof colorSelect", "color", "dorlingCircleConf","storageUpdate"].includes(name);
    });
    adjustObservableWidth(mainWindowRef, main);
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={mainWindowRef} />
      <div ref={allStylesRef} />
      <div ref={stylesRef} />
    </>
  );
}

Mapa.tipo = "mapa";

export default Mapa;
