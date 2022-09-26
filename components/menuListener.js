

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

module.exports = menuListener;
