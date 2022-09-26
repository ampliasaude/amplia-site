import {Library} from "@observablehq/runtime";

function menuListener(inspector, router) {
    inspector._chain = inspector.fulfilled;
    inspector.fulfilled = function(value, name) {
        value.addEventListener("aba",ev=>{
            if(ev.detail.index == 1) {
                router.push("/trilhas/NascidosVivos");
            } else if(ev.detail.index == 2) {
                router.push("/trilhas/CaracteristicasNascimento");
            } else if(ev.detail.index == 3) {
                router.push("/trilhas/MortalidadeInfantil");
            }
        });
        return this._chain(value, name);
    }
    return inspector;
}

function adjustObservableWidth(visRef, main) {
    const library = new Library();
    main.redefine("width", library.Generators.observe(notify => {
      let width = notify(visRef.current.clientWidth);
      function resized() {
        let newWidth = visRef.current.clientWidth;
        if (newWidth !== width) {
          notify(width = newWidth);
          console.log("Atualizou Largura!:", newWidth);
        }
      }
      addEventListener("resize", resized);
      return () => removeEventListener("resize", resized);
    }));
}

module.exports = { menuListener, adjustObservableWidth };
