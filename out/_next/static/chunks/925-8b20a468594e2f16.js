"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{474:function(e,t,i){e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},3656:function(e,t,i){e.exports=i.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},3925:function(e,t,i){function a(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function n(e){return e`## Menu Amplia`}function o(e){return function(t,i){let a=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,n=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,o=0,l=Symbol(),r=Symbol(),s=Symbol();function d(a,n,d,u){n=n||"";let p=document.createElement("div"),m={},f={},v={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let i=m[t];"expression"!=t&&(e[i[0]]=i[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in v)e.push(v[t]);return e.join("")}});let h=document.createElement("div"),b=document.createElement("div"),x=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),A=document.createElement("div");h.classList.add("menuAbas"),b.classList.add("abas"),g.classList.add("legenda"),x.classList.add("menuCompacto"),y.classList.add("background-1"),A.classList.add("background-2"),h.append(b),h.append(x),h.append(y),h.append(A),x.append(g),h.setAttribute("style",`--corFundoMenu: ${d};`),u&&h.classList.add("principal"),t.forEach((t,a)=>{!function(t,a,d){let c="m"+ ++o,u=document.createElement("div"),h=document.createElement("div"),b=document.createElement("div"),x=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),A=document.createElement("div"),E=document.createElement("div"),w=d+2;m[a.varName]="",f[a.varName]="",v[a.varName]="";let C=[];function O(){u[r](),p.dispatchEvent(new e("input"))}u[r]=function(){let e=C.filter(e=>e.checked).map(e=>e.value),t=C.filter(e=>e.checked).map(e=>e[s].expression),i=C.filter(e=>e.checked).map(e=>e[s].urlid);m[a.varName]=[a.attrIndex,t],v[a.varName]=i.join(""),e.length?h.classList.add("selecionado"):h.classList.remove("selecionado");let n=e.join(" ou ");g.innerHTML=n,g.setAttribute("title",n),f[a.varName]=n},u.classList.add("itemMenuCompacto"),u.classList.add(a.varName),h.classList.add("titulo"),h.innerHTML=a.title,x.classList.add("valoresSelecionados"),g.classList.add("textoValoresSelecionados"),y.classList.add("icone"),y.innerHTML="expand_more",u.append(h),b.append(x),u.append(b),x.append(y),x.append(g),A.classList.add("submenu"),A.style["grid-column"]=w+"/"+(w+1),E.classList.add("itens"),E.classList.add("i"+d),E.classList.add("ABA"+i),A.append(E),u[l]=A,u.style["grid-column-start"]=w,u.addEventListener("click",e=>{if(u.classList.contains("aberto"))u.classList.remove("aberto"),A.classList.remove("aberto");else{let t=u.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[l].classList.remove("aberto")),u.classList.add("aberto"),A.classList.add("aberto")}});let _=null;a.itens.forEach((e,t)=>{let i=document.createElement("div"),o=document.createElement("label"),l=document.createElement("input");o.innerHTML=e.name,o.setAttribute("for",c+t),l.setAttribute("type",a.input),l.setAttribute("value",e.name),n.indexOf(e.urlid)>=0&&l.setAttribute("checked","checked"),l.setAttribute("id",c+t),l.setAttribute("name","radio"===a.input?c:c+t),l[s]=e,i.classList.add("item"),i.append(l),i.append(o),E.append(i),C.push(l),l.addEventListener("input",e=>{e.stopPropagation(),O()}),"radio"==a.input&&l.addEventListener("click",e=>{if(e.target===_){e.target.checked=!1,_=null,O();return}_=e.target})}),t.append(u),t.append(A),u[r]()}(x,t,a)});let E=p.attachShadow({mode:"open"});return E.append(function(){let e=document.createElement("style");return e.textContent=`                  
          div.menuAbas {
            --corFundoItemAberto: #F4F4F4;
            --corAltaInfluencia: #B90404;
            --corFonte: #151472;
            --corFonteDesabilitada: #aaa;

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;     
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            font-family: "Roboto Condensed";  
            color: var(--corFonte);
            margin: 0px 0px;
          }

          div.menuAbas div.abas {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            font-size: 14px;
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 1px;
          }

          div.menuAbas div.abas div.aba {
            position: relative;
            background-color: #F4F4F4;
            text-align: center;
            padding: 8px 0;
            font-weight: 700;
            border-radius: 6px 6px 0 0;
          }

          div.menuAbas div.abas div.aba.desabilitada {
              color: var(--corFonteDesabilitada);
          }

          div.menuAbas div.abas div.aba.selecionada {
            background-color: #E5E5E5;
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
            z-index: 2;
          }

          div.menuAbas div.menuCompacto {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            display: grid;
            grid-template-columns: 80px repeat(${t.length},85px) 8px;
            gap: 10px;
            width: fit-content;
          }

          div.menuAbas div.background-1 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            z-index: 1;
          }

          div.principal div.background-1 {
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
          }

          div.menuAbas div.background-2 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            background-color: var(--corFundoMenu);
            z-index: 3;
          }

          div.menuAbas .legenda {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoItemAberto);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            z-index: 4;
          }

          div.menuAbas .legenda .titulo {
            text-align: center;
            min-height: 18px;
          }

          div.menuAbas .legenda .icone {
            padding-top: 5px;
            text-align: center;
          }

          div.itemMenuCompacto {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoMenu);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            grid-row-start: 1;
            grid-row-end: 2;  
            border-radius: 5px 5px 0 0;
            transition: background-color 1s, box-shadow 1s;
            z-index: 4;
            justify-content: end;
          }

          div.itemMenuCompacto.aberto {
            box-shadow: 0px 6px 0px 0px #F4F4F4, 2px 0px 4px #00000030;
            background-color: var(--corFundoItemAberto);
          }

          div.itemMenuCompacto div.titulo {
            font-weight: 300;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
          }

          div.itemMenuCompacto div.titulo.selecionado {
            font-weight: 700;
          }

          div.itemMenuCompacto div.valoresSelecionados {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center; 
            line-height: 20px;
          }

          div.itemMenuCompacto div.valoresSelecionados div.textoValoresSelecionados {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;  
          }

          div.itemMenuCompacto div.valoresSelecionados div.icone {
            display: inline;
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 0.8;
            letter-spacing: normal;
            text-transform: none;
            padding: 0px;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            transform: rotate(0deg);
            transition: transform 1s;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
          }

          div.itemMenuCompacto.aberto div.valoresSelecionados div.icone {
            transform: rotate(-180deg);
          }

          div.menuCompacto .submenu {
            box-shadow: 2px -2px 4px #00000030;
            position: relative;
            background-color: var(--corFundoItemAberto);
            grid-row-start: 1;
            grid-row-end: 2;
            top: 20px;
            height: 6px;
            opacity: 0;
            transition: top 1s, opacity 1s;
            z-index: 3;
          }

          div.menuCompacto .submenu::after {
            content: "";
            position: absolute;
            display: block;
            background-color: var(--corFundoItemAberto);
            box-shadow: none;
            top: calc(100% - 12px);
            width: 100%;
            height: 12px;
          }

          div.menuCompacto .submenu.aberto {
            top: 100%;
            opacity: 1;
          }

          div.menuCompacto .submenu .itens {
            box-shadow: 2px -2px 4px #00000030;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%,0);
            background-color: var(--corFundoItemAberto);
            padding: 8px 10px 8px 20px;
            border-radius: 6px;
            margin-top: 0px;
            display: flex;
            width: fit-content;
            gap: 25px;
          }

          div.menuCompacto .submenu.aberto .itens {
          }

          div.menuCompacto .submenu .itens.i0.ABA0 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA0 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA0 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA0 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA1 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA1 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA1 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA1 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i3.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens .item {
            display: flex;
            align-items: center;
            white-space: nowrap;
            gap: 6px;
          }

          div.menuCompacto .submenu .itens .item label {
            font-size: 12px;
          }

          div.menuCompacto .submenu .itens .item input {
            -webkit-appearance: none;
            appearance: none;
            margin: 0px;
            width: 17px;
            height: 17px;
            border: 3px var(--corFonte) solid;
          }

          div.menuCompacto .submenu .itens .item input[type=radio] {
            border-radius: 50%;
          }

          div.menuCompacto .submenu .itens .item input:checked {
            background-color: var(--corFonte);  
          }

          div.menuCompacto .submenu .itens .item input:focus {
            outline: 0;  
          }

          div.menuCompacto .submenu .itens .item input[type=checkbox] {
            border-radius: 2px;
          }  
      `,e}()),E.append(h),p.cloneMenu=function(){let e=x.querySelectorAll("input:checked"),t=c(a),i=t.shadowRoot.querySelectorAll("input");for(let n=0;n<e.length;n++)for(let o=0;o<i.length;o++)e[n][s]===i[o][s]&&(i[o].checked=!0);let l=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let d=0;d<l.length;d++)l[d][r]();return t},Object.defineProperty(p,"value",{get:()=>m}),Object.defineProperty(p,"texto",{get:()=>f}),[p,b,g]}function c(e,i,a){let[o,l,r]=d(null,i,a,!1),s=o.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${t.length},84px) 0px`,s.style.gap="2px",r.style["background-color"]="#ffffff66",r.style.color="var(--corFonte)",r.style["border-radius"]="0px 0px 0px 8px";let c=document.createElement("div"),u=document.createElement("div");return c.classList.add("titulo"),c.innerHTML="&nbsp",u.classList.add("icone"),u.innerHTML=n,r.append(c),r.append(u),o}return{principal:function(e){let[t,n,o]=d(null,e,"#E5E5E5",!0),l;(l=document.createElement("div")).classList.add("aba"),0===i&&l.classList.add("selecionada"),l.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:1}}))}),l.innerHTML="NASCIDOS VIVOS",n.append(l),(l=document.createElement("div")).classList.add("aba"),1===i&&l.classList.add("selecionada"),l.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:2}}))}),l.innerHTML="CARACTER\xcdSTICAS DO NASCIMENTO",n.append(l),(l=document.createElement("div")).classList.add("aba"),2===i&&l.classList.add("selecionada"),l.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:3}}))}),l.innerHTML="MORTALIDADE PERINATAL E INFANTIL",n.append(l),(l=document.createElement("div")).classList.add("aba"),3===i&&l.classList.add("selecionada"),l.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:4}}))}),l.innerHTML="SA\xdaDE DA GESTANTE",l.classList.add("desabilitada"),n.append(l);let r=document.createElement("div"),s=document.createElement("div");return r.classList.add("titulo"),s.classList.add("icone"),s.innerHTML=a,r.innerHTML="CONSULTA<br>PRINCIPAL",o.append(r),o.append(s),t},local:c}}}function l(e){return e`### Nascidos Vivos`}function r(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"E"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"F"},{name:"A termo tardio",style:[],expression:[6],urlid:"G"},{name:"A termo completo",style:[],expression:[5],urlid:"H"},{name:"A termo precoce",style:[],expression:[4],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"W"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"X"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Ignorado",style:[],expression:[0],urlid:"6"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"J"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"K"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"L"},{name:"Ignorado",style:[],expression:[0],urlid:"M"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"N"},{name:"Masculino",style:[],expression:[1],urlid:"O"},{name:"Indeterminado",style:[],expression:[0],urlid:"P"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"Q"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"R"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"S"},{name:"Preta ou Parda",style:[],expression:[2,4],urlid:"T"},{name:"Outros",style:[],expression:[3,4,5],urlid:"U"},{name:"Ignorado",style:[],expression:[0],urlid:"V"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"Y"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"Z"},{name:"Fundamental completo",style:[],expression:[5],urlid:"a"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"b"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"5"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"4"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"3"},{name:"Adequado",style:[],expression:[4],urlid:"2"},{name:"Mais que adequado",style:[],expression:[5],urlid:"1"},{name:"Ignorado",style:[],expression:[0],urlid:"0"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function p(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"E"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"F"},{name:"A termo tardio",style:[],expression:[6],urlid:"G"},{name:"A termo completo",style:[],expression:[5],urlid:"H"},{name:"A termo precoce",style:[],expression:[4],urlid:"I"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"W"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"X"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Ignorado",style:[],expression:[0],urlid:"6"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"J"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"K"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"L"},{name:"Ignorado",style:[],expression:[0],urlid:"M"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"N"},{name:"Masculino",style:[],expression:[1],urlid:"O"},{name:"Indeterminado",style:[],expression:[0],urlid:"P"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"Q"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"R"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"S"},{name:"Preta ou Parda",style:[],expression:[2,4],urlid:"T"},{name:"Outros",style:[],expression:[3,4,5],urlid:"U"},{name:"Ignorado",style:[],expression:[0],urlid:"V"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"Y"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"Z"},{name:"Fundamental completo",style:[],expression:[5],urlid:"a"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"b"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"5"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"4"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"3"},{name:"Adequado",style:[],expression:[4],urlid:"2"},{name:"Mais que adequado",style:[],expression:[5],urlid:"1"},{name:"Ignorado",style:[],expression:[0],urlid:"0"},]},]}function m(e,t){return e(t,1)}function f(e){return e`### Mortalidade Perinatal e infantil`}function v(e){return e.principal()}function h(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"E"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"N"},{name:"Masculino",style:[],expression:[1],urlid:"O"},{name:"Indeterminado",style:[],expression:[0],urlid:"P"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"S"},{name:"Preta ou Parda",style:[],expression:[2,4],urlid:"T"},{name:"Outros",style:[],expression:[3,4,5],urlid:"U"},{name:"Ignorado",style:[],expression:[0],urlid:"V"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"Y"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"Z"},{name:"Fundamental completo",style:[],expression:[5],urlid:"a"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"b"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},]}function b(e,t){return e(t,2)}function x(e){return e`### Saude da Gestante`}function g(e){return e`## DataSources`}function y(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,3,2,2,2,3,3,3,3,3,2,2],a=[3,2,2],n=null;async function o(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function l(e){let t=await o(),i=t.buffer.byteLength/12,a=0,n=i-1;for(;a<=n;){let l=Math.floor((a+n)/2),r=t.getUint32(12*l);if(e==r)return[t.getUint32(12*l+4),t.getUint32(12*l+8)];e<r?n=l-1:a=l+1}return null}function r(e,t,n,o){o=o||{};let l=(t+n)*11,r=e.getUint32(l).toString();r=r.substring(0,4)+"-"+r.substring(4,6)+"-"+r.substring(6);let s=e.getUint16(l+4),d=e.getUint32(l+6),c=e.getUint8(l+10),u=0,p=[];for(let m=0;m<i.length;m++){let f=((1<<i[m])-1<<u&d)>>u;p.push(f),u+=i[m]}u=0;for(let v=0;v<a.length;v++){let h=((1<<a[v])-1<<u&c)>>u;p.push(h),u+=a[v]}for(let b=0;b<p.length;b++){let x=p[b],g=o[b],y=!0;if(g&&g.length){y=!1;for(let A=0;A<g.length&&!y;A++)y=g[A].includes(x)}if(!y)return[r]}return[r,s,...p]}function s(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await l(t):(a=0,i=e.buffer.byteLength/11),[e,a,i]})}function d(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchTotal:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let l=0;l<n;l++){let s=r(e,a,l,i),d=o.get(s[0]);d?d[1]++:(d=[0,1],o.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,m]of o)c.push({data:p,valor:m[0]}),u.push({data:p,valor:m[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPIG:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let l=0;l<n;l++){let s=r(e,a,l,i),d=o.get(s[0]);d?d[3]++:(d=[0,0,0,1],o.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[p,m]of o)(m[0]||m[1]||m[2])&&(c.push({data:p,ig:"PEQUENO",total:m[0]}),c.push({data:p,ig:"ADEQUADO",total:m[1]}),c.push({data:p,ig:"GRANDE",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPeso:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let l=0;l<n;l++){let s=r(e,a,l,i);if(s.length>1){let d=o.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],o.set(s[0],d))}}let c=[];for(let[u,p]of o){let m={data:u,valor:p[0]/p[1],total:p[1]};c.push(m)}return c.sort(t),c})(e,a,n))},fetchRobson:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let l=0;l<n;l++){let s=r(e,a,l,i),d=o.get(s[0]);d?d[3]++:(d=[0,0,0,1],o.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[p,m]of o)(m[0]||m[1]||m[2])&&(c.push({data:p,robson:"Robson1a4",total:m[0]}),c.push({data:p,robson:"Robson5",total:m[1]}),c.push({data:p,robson:"Robson6a10",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function A(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,2,2,3,3,3,2,2],a=null;async function n(){return null!=a?a:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>a=new DataView(e))}async function o(e){let t=await n(),i=t.buffer.byteLength/12,a=0,o=i-1;for(;a<=o;){let l=Math.floor((a+o)/2),r=t.getUint32(12*l);if(e==r)return[t.getUint32(12*l+4),t.getUint32(12*l+8)];e<r?o=l-1:a=l+1}return null}function l(e,t,a,n){n=n||{};let o=(t+a)*10,l=e.getUint32(o).toString();l=l.substring(0,4)+"-"+l.substring(4,6)+"-"+l.substring(6);let r=e.getUint16(o+4),s=e.getUint32(o+6),d=0,c=[];for(let u=0;u<i.length;u++){let p=((1<<i[u])-1<<d&s)>>d;c.push(p),d+=i[u]}for(let m=0;m<c.length;m++){let f=c[m],v=n[m],h=!0;if(v&&v.length){h=!1;for(let b=0;b<v.length&&!h;b++)h=v[b].includes(f)}if(!h)return[l]}return[l,r,...c]}function r(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await o(t):(a=0,i=e.buffer.byteLength/10),[e,a,i]})}function s(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchNeoNatal:function(e,i){return i=s(i),r(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let r=0;r<n;r++){let s=l(e,a,r,i),d=o.get(s[0]);d?d[3]++:(d=[0,0,0,1],o.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[p,m]of o)(m[0]||m[1]||m[2])&&(c.push({data:p,neonatal:"PRECOCE",total:m[0]}),c.push({data:p,neonatal:"TARDIO",total:m[1]}),c.push({data:p,neonatal:"NEOTOTAL",total:m[0]+m[1]}),c.push({data:p,neonatal:"POS",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchFetal:function(e,i){return(i=s(i))[3]=[],r(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let r=0;r<n;r++){let s=l(e,a,r,i),d=o.get(s[0]);d?d[3]++:(d=[0,0,0,1],o.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[p,m]of o)(m[0]||m[1]||m[2])&&c.push({data:p,valor:m[0]}),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchRelParto:function(e,i){return i=s(i),r(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let r=0;r<n;r++){let s=l(e,a,r,i),d=o.get(s[0]);d?d[3]++:(d=[0,0,0,1],o.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[p,m]of o)(m[0]||m[1]||m[2])&&(c.push({data:p,relparto:"ANTES",total:m[0]}),c.push({data:p,relparto:"DURANTE",total:m[1]}),c.push({data:p,relparto:"DEPOIS",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchTotal:function(e,i){return i=s(i),r(e).then(([e,a,n])=>(function(e,a,n){let o=new Map;for(let r=0;r<n;r++){let s=l(e,a,r,i),d=o.get(s[0]);d?d[1]++:(d=[0,1],o.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,m]of o)c.push({data:p,valor:m[0]}),u.push({data:p,valor:m[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function E(e){return e`### Alguns testes com os datasources`}function w(e,t){return e.fetchRobson(11,t.expression)}function C(e,t){return e.fetchPeso(11,t.expression)}function O(e){return e("municipios2.csv").csv()}function _(e,t){return e.fetchRelParto(35,t.expression)}function M(e){return e.expression}function S(e,t){return e.fetchFetal(35,t.expression)}function T(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function I(e,t){let I=e.module(),R=new Map([["municipios2.csv",{url:new i.U(i(474)),mimeType:"text/csv",toString:function(){return this.url}}]]);return I.builtin("FileAttachment",e.fileAttachments(e=>R.get(e))),I.variable(t()).define(["md"],a),I.variable(t()).define(["md"],n),I.variable(t("ampliaMenu")).define("ampliaMenu",["Event"],o),I.variable(t()).define(["md"],l),I.variable(t("mp")).define("mp",["menuNascidosVivos"],r),I.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),I.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),I.variable(t()).define(["md"],c),I.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),I.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),I.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",p),I.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],m),I.variable(t()).define(["md"],f),I.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],v),I.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),I.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",h),I.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],b),I.variable(t()).define(["md"],x),I.variable(t()).define(["md"],g),I.variable(t("datasource")).define("datasource",y),I.variable(t("datasource_sim")).define("datasource_sim",A),I.variable(t()).define(["md"],E),I.variable(t()).define(["datasource","cn"],w),I.variable(t()).define(["datasource","cn"],C),I.variable(t("municipios2")).define("municipios2",["FileAttachment"],O),I.variable(t()).define(["datasource_sim","mpi"],_),I.variable(t()).define(["mpi"],M),I.variable(t()).define(["datasource_sim","mpi"],S),I.variable(t()).define(["htl"],T),I}function R(e){return e`# Amplia Saúde - Trilhas Exploratórias - v4.0 - Características do Nascimento`}function N(e,t){return e`
    <style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.cabecalho{
  display:inline-block;
  width:100%;
  border-bottom:1px solid #9C9C9C;
}

.cabecalho-conteudo{
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 6px;
}
      
.titulo{
   font-family:"Open Sans";
   font-weight:700;  
   font-size:24px;
   color: #151472;
}
      
.subtitulo{
   font-family:"Open Sans";
   font-weight:400;  
   font-size:14px;
   margin-left:20px;
   color: #151472;
}
      
.cabecalho-novo:after{
    content: '';
    display: inline-block; /* Adicionando essa linha, */
    width: 100%; /* essa também */
    height: 0; /* e essa foi a última */
}
    </style>
<div class="cabecalho">
<img class="cabecalho-conteudo" src="https://github.com/ampliasaude/ampliasaude.github.io/raw/main/AmpliaSaude-horizontal.png" height="53px">
</div>
    
<div class="cabecalho-novo" style="display:inline-block; width:100%; text-align:justify;">
    
 <div style="margin-bottom:16px; margin-top:16px; display:inline-block;">
   <span class="titulo">Trilhas Exploratórias<span>
   <span class="subtitulo">Saúde materna e neonatal e poluição ambiental por semana de concepção</span>
</div>
     
     <div style="justify-content:space-between; display:inline-block;">
     
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Capturar imagem</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7 9L4 13H16.5L13.5 7L11.5 9.5L9.5 12L7 9Z" fill="white" stroke="white"/>
</svg>
     
<svg style="margin-right: 28px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Obter dados</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536L13.5355 9.17157C13.7308 8.97631 13.7308 8.65973 13.5355 8.46447C13.3403 8.2692 13.0237 8.2692 12.8284 8.46447L10 11.2929L7.17157 8.46447C6.97631 8.2692 6.65973 8.2692 6.46447 8.46447C6.2692 8.65973 6.2692 8.97631 6.46447 9.17157L9.64645 12.3536ZM10.5 12L10.5 5L9.5 5L9.5 12L10.5 12Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10V14C4 14.5523 4.44772 15 5 15H15C15.5523 15 16 14.5523 16 14V10H15V14H5L5 10H4Z" fill="white"/>
</svg>

${t()}

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Enviar via email</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.125C16 6.50625 15.46 6 14.8 6H5.2C4.54 6 4 6.50625 4 7.125V13.875C4 14.4937 4.54 15 5.2 15H14.8C15.46 15 16 14.4937 16 13.875V7.125ZM14.8 7.125L10 9.9375L5.2 7.125H14.8ZM14.8 13.875H5.2V8.25L10 11.0625L14.8 8.25V13.875Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no LinkedIn</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.075 6.97826C7.075 7.51865 6.6125 7.95652 6.04167 7.95652C5.47083 7.95652 5.00833 7.51865 5.00833 6.97826C5.00833 6.43826 5.47083 6 6.04167 6C6.6125 6 7.075 6.43826 7.075 6.97826ZM7.08333 8.73913H5V15H7.08333V8.73913ZM10.4092 8.73913H8.33917V15H10.4096V11.7134C10.4096 9.88604 12.9217 9.73657 12.9217 11.7134V15H15V11.0357C15 7.95222 11.2825 8.06452 10.4092 9.58239V8.73913Z" fill="white"/>
</svg>
     
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Facebook</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M8.25 8.33333H7V10H8.25V15H10.3333V10H11.8508L12 8.33333H10.3333V7.63875C10.3333 7.24083 10.4133 7.08333 10.7979 7.08333H12V5H10.4133C8.915 5 8.25 5.65958 8.25 6.92292V8.33333Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Twitter</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.06547C15.5953 7.24636 15.1603 7.36818 14.7038 7.42309C15.17 7.14207 15.5279 6.69678 15.6961 6.16612C15.2603 6.42637 14.7772 6.61557 14.2629 6.71755C13.8518 6.27594 13.2647 6 12.6157 6C11.1586 6 10.088 7.36864 10.417 8.78943C8.542 8.69483 6.87917 7.7904 5.76588 6.41576C5.17463 7.43694 5.45925 8.77282 6.46392 9.44929C6.0945 9.43729 5.74617 9.33532 5.44229 9.16504C5.41754 10.2176 6.16692 11.2023 7.25225 11.4215C6.93463 11.5083 6.58675 11.5286 6.23292 11.4603C6.51983 12.3628 7.35308 13.0195 8.34125 13.0379C7.3925 13.7869 6.19717 14.1214 5 13.9793C5.99871 14.6239 7.18533 15 8.4595 15C12.6496 15 15.0169 11.4372 14.8739 8.24169C15.3148 7.92099 15.6975 7.52092 16 7.06547Z" fill="white"/>
</svg>
     </div>


 </div>
`}function L(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function k(e,t,i,a,n){return o=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),i.value.forEach(i=>{Promise.all([a[e.variavel](i.nome,o.target.value.expression)]).then(a=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=i.nome),t.value=t.value.concat({idx:e.i,municipio:i.nome,variavel:e.variavel,dados:n[e.variavel](a[0])})})})})}}function P(e,t,i){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${i}</div>
</div>
`}function D(e,t,i,a,n,o,l){let r=document.createElement("div");for(let s=0;s<e.length;s++)r.append(t[e[s].variavel](e[s].i));return r.append(i()),a.create(r,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let i=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,i),n.value=e}}),document.removeEventListener("scroll",o),document.addEventListener("scroll",o),l.select(r).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=l.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),r}function F(){return function(){document.querySelectorAll(".tooltip").forEach(e=>setTimeout(e.updatePosition()))}}function B(){return 4}function $(e,t,i){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,i.intervalo[0],i.intervalo[1])}function U(e,t,i,a,n){return e`<!-- <label class="label-locais">LOCAIS </label> -->
${t.map((e,t)=>i(e,t))}${t.length<a?n:""}`}function G(e,t,i,a,n,o,l,r,s,d,c,u,p,m){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" value="Adicione um local" class="caixa-municipio" onfocus="this.value=''">
<datalist id="menu-municipios-options">
${i.map(e=>"<option value='"+e+"'>")}
${a.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!a.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!i.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(n.length==o||n.map(e=>e.nome).includes(t))){for(let f of(l.value=l.value.concat([{nome:t,cor:r.find(e=>!n.map(e=>e.cor).includes(e))}]),s))"PM25"==f.variavel&&i.includes(t)||Promise.all([d[f.variavel](t,"PM25"!=f.variavel?c.value.expression:null)]).then(e=>{u.value=u.value.concat({idx:f.i,municipio:t,variavel:f.variavel,dados:p[f.variavel](e[0])})});for(let v of[...new Set(m.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([d[s.find(e=>e.i==v).variavel](t,s.find(e=>e.i==v).filtros.value.expression)]).then(e=>{u.value=u.value.concat({idx:v,municipio:t,variavel:m.find(e=>e.idx==v).variavel,filtrado:!0,dados:p[m.find(e=>e.idx==v).variavel](e[0])})})}}).node()}function V(e,t,i,a,n,o,l,r,s,d,c,u,p,m){return e.create("button").attr("class","btn-adiciona").text("+").on("click",e=>{if(!t.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value))return;let f=document.getElementById("menu-municipios").value;if(document.getElementById("menu-municipios").value="Adicione munic\xedpio",6!=i.length&&!i.map(e=>e.nome).includes(f)){if(a.value=a.value.concat([{nome:f,cor:n.find(e=>!i.map(e=>e.cor).includes(e))}]),o.map(e=>e.municipio).includes(f)){l.value=r.concat(o.filter(e=>e.municipio==f));return}Promise.all([s(f),d(f),c(f)]).then(e=>{l.value=l.value.concat([{municipio:f,variavel:"PM25",dados:u(e[0])},{municipio:f,variavel:"PESO",dados:p(e[1])},{municipio:f,variavel:"ROBSON",dados:m(e[2])}])})}}).node()}function H(e,t,i,a,n,o,l){return(r,s)=>{let d=e.create("button").attr("class","btn-municipio").style("background-color",r.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(i.value=t.filter(e=>e!=r),a.value=n.filter(e=>e.municipio!=r.nome))});return o.includes(r.nome)?d.append("span").text(r.nome):d.append("span").text(r.nome+(r.nome.includes("(")?"":" ("+l.find(e=>e.municipio==r.nome).sigla+")")),d.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),d.node()}}function j(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function z(e,t){return()=>{let i=e.create("button").attr("class","btn-remove").on("click",t);return i.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),i.attr("title","Duplicar trilha"),i.node()}}function Z(e,t,i,a){return{PM25:e,PESO:t,ROBSON:i,TOTAL:a}}function J(e,t,i,a){return{PM25:e,PESO:t,ROBSON:i,TOTAL:a}}function q(e,t,i,a){return{PM25:e,PESO:t,ROBSON:i,TOTAL:a}}function W(e,t){return e`
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;     
}

.btn-municipio{
  border-radius: 6px;
  border: none;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 14px;
  margin-right: 6px;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-flex;
  align-items: flex-center;
  height: 22px;
}
.label-locais{
  font-family: 'Roboto Condensed';
  font-size: 12px;
  margin-right: 12px;
}
.btn-adiciona, .btn-remove{
  border-radius: 50%;
  border: none;
  background-color: #151472;
  color: white;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
.trilha{
  border-left: 1px var(--cor-trilha) solid;
  display: inline-block;
  vertical-align: middle;
}

.sombra{
  box-shadow: 2px -2px 6px 0px rgb(0 0 0 / 25%);
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 30px;
  border: 3px var(--cor-trilha) solid; 
  border-radius: 10px;
}

div.opcao-trilha {
  display: flex;
  gap: 4px;
  align-items: center;
}

span.titulo-trilha {
  font-weight: 700;
  margin-left: 5px;
  font-size: 12px;
}

span.fonte {
  text-align: right;
  flex-grow: 1;
  margin-right: 5px;
}

div.cabecalho-trilha {
  font-family: 'Roboto Condensed';
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--cor-trilha);
  line-height: 1.5;
  gap: 18px;
  font-size: 10px;
}

.lista-valores {
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  vertical-align: top;
  display: block;
  margin: 6px;
  text-align: center;
}

.interior-trilha{
  display: inline-block;
}
.fonte{
  font-weight: 400;
}
.valor{
  border-radius: 5px;
  display: block;
  text-align: center;
}
.conteudo-trilha{
  display: flex;
  justify-content: space-between;
}
.conteudo-trilha svg {
  border-radius: 0px 0px 20px 0px;
}
input{
  margin: 0px 0px 0px 0px;
  -webkit-appearance: none;
  appearance: none;
  margin: 0px;
  width: 12px;
  height: 12px;
  border: 1px #151472 solid;
  vertical-align: middle;
}
input:checked {
  background-color: #151472;  
}
input:focus {
  outline: 0;  
}
input[type=checkbox] {
  border-radius: 2px;
}  
input[type=radio] {
  border-radius: 50%;
} 

.titulo-lista-valores{
  font-family: 'Roboto Condensed';
  font-size: 11px;
  color: #141472;
}

.menuIG{
  margin-right: 10px;
  font-size: 12px;
}

.caixa-municipio{
  border: none;
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 150px;
  max-width: 240px;
  height: 20px;
}

button span {
  pointer-events: none;
}

.drag-container{
  display:inline-block;
  height: ${t+17}px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nova-trilha {
  border: solid 3px #C4C4C4;
  border-radius: 10px 0 0 10px;
  border-right: none;
}

.drag{
  cursor: grab;
  height: 24px;
}

.buttons{
  margin-right: 5px;
  position: relative;
  top: -20px;
}

.icon-blue{
  color: #151472;
  user-select: none;
}

.icon-gray{
  color: #C4C4C4;
  user-select: none;
}

div.rodape-trilha {
  background-color: var(--cor-trilha);
  padding: 0px;
  border: 0px;
  margin: 0 0 0 -25px;
  min-height: 30px;
}

div.rodape-trilha div.menu-local {
  margin-top: -30px;
  min-height: 30px;
}

div.botao-comparacao {
  position: relative;
  width: 100px;
  height: 20px;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  color: #484796;
  padding:5px;
  z-index: 5;
}

div.botao-comparacao label {
  line-height: 25px;
}

div.botao-comparacao input {
  margin-left: 2px;
  margin-right: 4px;
  margin-top: -2px;
  vertical-align: none;
}

div.tooltip {
  position:fixed;
  padding: 6px; 
  border-radius: 4px; 
  z-index:10; 
  border: 1px #15147266 solid;
  text-align: center;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 700;
  color: #484796;
}

div.tooltip div.c2 {
  display: grid;
  column-gap: 6px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto auto;  
}

div.tooltip div.c1 {
  display: grid;
  column-gap: 4px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto;
}

div.tooltip div.periodo {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
}

div.tooltip div.c1 div.periodo {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.periodo {
  grid-column-end: 3;  
}

div.tooltip div.rodape {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
  font-style: italic;
  padding-top: 10px;
}

div.tooltip div.c1 div.rodape {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.rodape {
  grid-column-end: 5;  
}

div.tooltip div.legenda {
  text-align: center;
  margin-top: -2px;
}

div.tooltip div.municipio {
  text-align: left;
  max-width: 130px;
  overflow: hidden;    
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
}

div.tooltip div.valor {
 text-align: center;
}

div.tooltip div.c2 svg {
  align-self: center;
  justify-self: center;
}

</style>
`}function X(){return{PESO:"#C8F9ED",PM25:"#F4947C",PIG:"#CDD9FA",TOTAL:"#FFFCD2",ROBSON:"#FADAE6"}}function Q(){return{PESO:"#EDFDF9",PM25:"#FDEEEA",PIG:"#EEECFD",TOTAL:"#FFFEED",ROBSON:"#FDECEE"}}function Y(e,t,i){return function(a,n,o,l="valor",r=null){function s(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),i.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),i.setAttribute("stroke","#151472"),e?(i.setAttribute("stroke-width","1.5"),i.setAttribute("stroke-dasharray","2.5 1")):i.setAttribute("stroke-width","2"),t.appendChild(i),t}function d(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let i=e.indexOf("(");i>=0&&(e.substring(i),e=e.substring(0,i));let a=e.toLowerCase().split(" ");for(let n=0;n<a.length;n++)t.includes(a[n])||(a[n]=a[n][0].toUpperCase()+a[n].substring(1));return a.join(" ")}setTimeout(c=>{let u=a.parentElement.querySelector(".tooltip");u||((u=document.createElement("div")).setAttribute("class","tooltip"),u.style.backgroundColor=i[n]+"CC",a.parentElement.appendChild(u));let p=a.querySelector("g[aria-label=rule]");p&&function(i,a){function c(t,i){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==i.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}a.updatePosition=function(){let e=i.getBoundingClientRect(),t=document.body.getBoundingClientRect();a.style.top=`${e.y}px`,e.x>250?(delete a.style.left,a.style.right=`${t.width+t.x-e.x+20}px`):(delete a.style.right,a.style.left=`${e.x+10}px`)};let u=t(o,n,l,r);a.updatePosition();let p=u.valoresComparacao.length>0,m=document.createElement("div"),f=document.createElement("div");f.classList.add("periodo"),f.textContent=u.semanaInicio+" - "+u.semanaFim,m.appendChild(f),p?(m.classList.add("c2"),m.appendChild(s(!1)),m.appendChild(s(!0))):m.classList.add("c1");for(let v=0;v<u.municipios.length;v++){let h=document.createElement("div"),b=document.createElement("div"),x=document.createElement("div"),g=p?document.createElement("div"):null;h.classList.add("legenda"),h.style.color=u.municipios[v].cor,h.textContent="⬤",b.classList.add("municipio"),b.textContent=d(u.municipios[v].nome),c(b,u.municipios[v]),x.classList.add("valor"),x.textContent=u.valoresPrincipal[v],m.appendChild(h),m.appendChild(b),m.appendChild(x),g&&(g.classList.add("valor"),g.textContent=u.valoresComparacao[v],m.appendChild(g))}let y=document.createElement("div");y.classList.add("rodape"),y.innerHTML=`Unidade: <b>${u.unidade}</b><br>M\xe9dia Semanal`,m.appendChild(y),a.replaceChildren(m)}(p,u)})}}function K(e,t,i,a,n,o,l,r,s){return function(d,c,u,p){function m(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function f(e){return(p&&(e=e[p]),"percentual"===u||"taxa"===u)?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let v={},h=t.filter(e=>e.idx==d).sort(function(t,i){return e.findIndex(e=>e.nome==i.municipio)-e.findIndex(e=>e.nome==t.municipio)}),b=h,x=h.filter(e=>e.filtrado),g=i[a.bisector(e=>e.inicio.getTime()).center(i,n)];return v.semanaInicio=m(g.inicio).substring(0,5),v.semanaFim=m(g.termino),v.unidade=o[c][u],v.valoresPrincipal=[],v.valoresComparacao=[],v.municipios=[],v.ufSelecionada=e.some(e=>l.includes(e.nome)),x.length>0&&(b=h.filter(e=>!e.filtrado),"PIG"!==c&&(x=x.filter(e=>!Object.values(r).includes(e.municipio)||"PM25"!=c)),x.forEach(e=>{let t=e.dados[s.center(e.dados,n)][u];v.valoresComparacao.push(f("PIG"==c?t[p]:t))})),b.forEach(t=>{let i=e.find(e=>e.nome==t.municipio),a=t.dados[s.center(t.dados,n)][u];v.municipios.push(i),v.valoresPrincipal.push(f("PIG"==c?a[p]:a))}),v}}function ee(){return e=>70}function et(e){return()=>e`<svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C10.3064 0.853163 10.3064 -2.71343 16.4172 6.14199C22.5281 14.9974 25.1695 10.5011 31 1" stroke="#141472" stroke-width="2"/>
</svg>`}function ei(e){return()=>e`<svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C10.3064 0.853163 10.3064 -2.71343 16.4172 6.14199C22.5281 14.9974 25.1695 10.5011 31 1" stroke="#141472" stroke-width="2" stroke-dasharray="3 3"/>
</svg>`}function ea(e){return()=>e`<svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C11.3064 1.85316 11.3064 -1.71343 17.4172 7.14199C23.5281 15.9974 26.1695 11.5011 32 2" stroke="#141472" stroke-width="3"/>
</svg>`}function en(e){return()=>e`<svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C10.3064 0.853163 10.3064 -2.71343 16.4172 6.14199C22.5281 14.9974 25.1695 10.5011 31 1" stroke="#141472"/>
</svg>`}function eo(e,t,i,a,n,o,l,r,s,d,c,u,p,m,f,v,h,b,x,g,y,A,E,w,C,O,_,M,S){return T=>{let I=e.plot({marginTop:5,marginRight:0,width:t-65,height:i,x:{grid:!0,label:null,format:a,domain:n.find(e=>e.i==T).alterar_tempo?n.find(e=>e.i==T).alterar_tempo.map(e=>o[e].inicio):l.map(e=>o[e].inicio)},y:{grid:!0,domain:[0,r[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:r[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),n.find(e=>e.i==T).mostra_media_movel?c.filter(e=>e.idx==T&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,T)),e.windowY({strict:!0,k:m,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:f,stroke:v.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==T&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,T)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:f,stroke:v.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==T)[0].dados[h.center(c.filter(e=>e.idx==T)[0].dados,b)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==T).mostra_media_movel?null:c.filter(e=>e.idx==T).map((t,i)=>e.dot([t.dados[h.center(t.dados,b)]],{x:"x",y:"valor",fill:v.find(e=>e.nome==t.municipio).cor}))]});return x(I,"PM25",T),I.onmousedown=e=>{g.value=Math.min(Math.max(I.scale("x").invert(e.x-y(e.x)),I.scale("x").domain[0]),I.scale("x").domain[1])},A.select(I).call(A.drag().on("drag",e=>g.value=Math.min(Math.max(I.scale("x").invert(e.x-y(e.x)),I.scale("x").domain[0]),I.scale("x").domain[1]))),E`
<div style="--cor-trilha:${w.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${A.create("button").attr("class","btn-remove").text("–").on("click",C).node()}<br>
  ${O()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==T?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==T?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${T}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">POLUENTE</span>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${A.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).mostra_media_movel).on("change",e=>_(e,T)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${A.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).alterar_tempo).on("change",e=>M(e,T)).node()}
   </div>
   <span class="fonte">Fonte: SISAM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${I}</div>
</div>
${S(T)}
</div>
</div>
</div>`}}function el(e,t,i,a,n,o,l,r,s,d,c,u,p,m,f,v,h,b,x,g,y,A,E,w,C,O,_,M){return S=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==S).map(e=>e.municipio).includes(e))||a.find(e=>e.i==S).filtros.value.expression&&a.find(e=>e.i==S).show_filtros&&t.filter(e=>e.idx==S).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==S).every(e=>void 0!==e.filtrado))return i();let T=o.plot({marginTop:5,marginRight:0,width:l-65,height:r,x:{grid:!0,label:null,domain:a.find(e=>e.i==S).alterar_tempo?a.find(e=>e.i==S).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==S).mostra_media_movel?t.filter(e=>e.idx==S).map((t,i)=>o.line(t.dados.filter(e=>c(e,S)),o.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:"valor",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==S).map((t,i)=>o.line(t.dados.filter(e=>c(e,S)),{sort:"x",x:"x",y:"valor",curve:"monotone-x",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),o.ruleX([t.filter(e=>e.idx==S)[0].dados[f.center(t.filter(e=>e.idx==S)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==S).mostra_media_movel?null:t.filter(e=>e.idx==S).map((t,i)=>o.dot([t.dados[f.center(t.dados,v)]],{x:"x",y:"valor",fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(T,"PESO",S),T.onmousedown=e=>{b.value=Math.min(Math.max(T.scale("x").invert(e.offsetX),T.scale("x").domain[0]),T.scale("x").domain[1])},x.select(T).call(x.drag().on("drag",e=>b.value=Math.min(Math.max(T.scale("x").invert(e.x-g(e.x)),T.scale("x").domain[0]),T.scale("x").domain[1]))),y`
<div style="--cor-trilha: ${A.PESO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${x.create("button").attr("class","btn-remove").text("–").on("click",E).node()}<br>
  ${w()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==S?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==S?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${S}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">PESO AO NASCER</span>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==S).mostra_media_movel).on("change",e=>C(e,S)).node()}
    </div>
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==S).alterar_tempo).on("change",e=>O(e,S)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>

  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${T}</div>
</div>
${_(S)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==S).show_filtros).on("change",e=>M(e,S)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==S).show_filtros?a.find(e=>e.i==S).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function er(e,t,i,a,n,o,l,r,s,d,c,u,p,m,f,v,h,b,x,g,y,A,E,w,C,O,_,M,S,T){return I=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==I).map(e=>e.municipio).includes(e))||a.find(e=>e.i==I).filtros.value.expression&&a.find(e=>e.i==I).show_filtros&&t.filter(e=>e.idx==I).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==I).every(e=>void 0!==e.filtrado))return i();let R=a.find(e=>e.i==I).escala,N=a.find(e=>e.i==I).robson,L=o.plot({marginTop:5,marginRight:0,width:l-65,height:r,x:{grid:!0,label:null,domain:a.find(e=>e.i==I).alterar_tempo?a.find(e=>e.i==I).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==I).mostra_media_movel?t.filter(e=>e.idx==I).map((t,i)=>o.line(t.dados.filter(e=>c(e,I)),o.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[R][N],strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==I).map((t,i)=>o.line(t.dados.filter(e=>c(e,I)),{sort:"x",x:"x",y:e=>e[R][N],curve:"monotone-x",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),o.ruleX([t.filter(e=>e.idx==I)[0].dados[f.center(t.filter(e=>e.idx==I)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==I).mostra_media_movel?null:t.filter(e=>e.idx==I).map((t,i)=>o.dot([t.dados[f.center(t.dados,v)]],{x:"x",y:e=>e[R][N],fill:e.find(e=>e.nome==t.municipio).cor}))]});h(L,"ROBSON",I,R,N),L.onmousedown=e=>{b.value=Math.min(Math.max(L.scale("x").invert(e.offsetX),L.scale("x").domain[0]),L.scale("x").domain[1])},x.select(L).call(x.drag().on("drag",e=>b.value=Math.min(Math.max(L.scale("x").invert(e.x-g(e.x)),L.scale("x").domain[0]),L.scale("x").domain[1])));let k;return y`
<div style="--cor-trilha: ${A.ROBSON}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${x.create("button").attr("class","btn-remove").text("–").on("click",E).node()}<br>
  ${w()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==I?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==I?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${I}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">GRUPOS DE ROBSON</span>

    ${(k=x.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),k.append("option").attr("name","Robson1a4").text("Robson1a4").property("selected","Robson1a4"==a.find(e=>e.i==I).robson),k.append("option").attr("name","Robson5").text("Robson5").property("selected","Robson5"==a.find(e=>e.i==I).robson),k.append("option").attr("name","Robson6a10").text("Robson6a10").property("selected","Robson6a10"==a.find(e=>e.i==I).robson),k.on("change",e=>C(e,I)),k.node()}
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==I).mostra_media_movel).on("change",e=>O(e,I)).node()}
    </div>
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==I).alterar_tempo).on("change",e=>_(e,I)).node()}
    </div>
    <div class="opcoes-trilha">
    
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${x.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","absoluto"==a.find(e=>e.i==I).escala).attr("value","absoluto").on("change",e=>M(e,I)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">PERCENTUAL</label>
    ${x.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","percentual"==a.find(e=>e.i==I).escala).attr("value","percentual").on("change",e=>M(e,I)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">TAXA POR 1000</label>
    ${x.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","taxa"==a.find(e=>e.i==I).escala).attr("value","taxa").on("change",e=>M(e,I)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${L}</div>
</div>
${S(I)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==I).show_filtros).on("change",e=>T(e,I)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==I).show_filtros?a.find(e=>e.i==I).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function es(e,t,i,a,n,o,l,r,s,d,c,u,p,m,f,v,h,b,x,g,y,A,E,w,C,O,_,M,S){return T=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==T).map(e=>e.municipio).includes(e))||a.find(e=>e.i==T).filtros.value.expression&&a.find(e=>e.i==T).show_filtros&&t.filter(e=>e.idx==T).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==T).every(e=>void 0!==e.filtrado))return i();let I=a.find(e=>e.i==T).escala,R=o.plot({marginTop:5,marginRight:0,width:l-65,height:r,x:{grid:!0,label:null,domain:a.find(e=>e.i==T).alterar_tempo?a.find(e=>e.i==T).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==T).mostra_media_movel?t.filter(e=>e.idx==T).map((t,i)=>o.line(t.dados.filter(e=>c(e,T)),o.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[I],strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==T).map((t,i)=>o.line(t.dados.filter(e=>c(e,T)),{sort:"x",x:"x",y:e=>e[I],curve:"monotone-x",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),o.ruleX([t.filter(e=>e.idx==T)[0].dados[f.center(t.filter(e=>e.idx==T)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==T).mostra_media_movel?null:t.filter(e=>e.idx==T).map((t,i)=>o.dot([t.dados[f.center(t.dados,v)]],{x:"x",y:e=>e[I],fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(R,"TOTAL",T,I),R.onmousedown=e=>{b.value=Math.min(Math.max(R.scale("x").invert(e.offsetX),R.scale("x").domain[0]),R.scale("x").domain[1])},x.select(R).call(x.drag().on("drag",e=>b.value=Math.min(Math.max(R.scale("x").invert(e.x-g(e.x)),R.scale("x").domain[0]),R.scale("x").domain[1]))),y`
<div style="--cor-trilha: ${A.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${x.create("button").attr("class","btn-remove").text("–").on("click",E).node()}<br>
  ${w()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==T?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==T?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${T}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">NASCIMENTOS TOTAIS</span>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==T).mostra_media_movel).on("change",e=>C(e,T)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==T).alterar_tempo).on("change",e=>O(e,T)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${x.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","absoluto"==a.find(e=>e.i==T).escala).attr("value","absoluto").on("change",e=>_(e,T)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">PERCENTUAL</label>
    ${x.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","percentual"==a.find(e=>e.i==T).escala).attr("value","percentual").on("change",e=>_(e,T)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${R}</div>
</div>
${M(T)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${x.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==T).show_filtros).on("change",e=>S(e,T)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==T).show_filtros?a.find(e=>e.i==T).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ed(e,t,i,a,n,o,l,r,s,d,c,u,p){return function(m,f="valor",v=null){let h=e.find(e=>e.i==m).variavel;return t.filter(e=>e.idx==m).map(e=>e.filtrado).some(e=>e)?i`<div class="lista-valores interior-trilha" style="display:flex;flex-direction:column;justify-content:space-between;">
<div style="width:180px">
  <span class="titulo-lista-valores">
  ${String(a[n.bisector(e=>e.inicio.getTime()).center(a,o)].inicio.getDate()).padStart(2,"0")+"/"+String(1+a[n.bisector(e=>e.inicio.getTime()).center(a,o)].inicio.getMonth()).padStart(2,"0")} – ${a[n.bisector(e=>e.inicio.getTime()).center(a,o)].termino.toLocaleDateString("pt-BR")}
  </span>

<div style="margin-top:5px;">
<div style="display:inline-block; color:#151472;">

${l()}

${("ROBSON"!=h?t.filter(e=>!e.filtrado&&e.idx==m&&(!Object.values(r).includes(e.municipio)||"PM25"!=h)).sort((e,t)=>s.findIndex(e=>e.nome==t.municipio)-s.findIndex(t=>t.nome==e.municipio)):t.filter(e=>!e.filtrado&&e.idx==m).sort((e,t)=>s.findIndex(e=>e.nome==t.municipio)-s.findIndex(t=>t.nome==e.municipio))).map(e=>"<span class='valor' style='color:"+s.find(t=>t.nome==e.municipio).cor+";'>"+("ROBSON"!=h?e.dados[d.center(e.dados,o)][f].toFixed("percentual"==f||"taxa"==f?3:0):e.dados[d.center(e.dados,o)][f][v].toLocaleString("pt-BR",{maximumFractionDigits:"percentual"==f?3:"taxa"==f?2:0}))+"</span>")}
</div>

<div style="display:inline-block; margin-left: 15px; color:#151472;">

${c()}

${("ROBSON"!=h?t.filter(e=>e.filtrado&&e.idx==m&&(!Object.values(r).includes(e.municipio)||"PM25"!=h)).sort((e,t)=>s.findIndex(e=>e.nome==t.municipio)-s.findIndex(t=>t.nome==e.municipio)):t.filter(e=>e.filtrado&&e.idx==m).sort((e,t)=>s.findIndex(e=>e.nome==t.municipio)-s.findIndex(t=>t.nome==e.municipio))).map(e=>"<span class='valor' style='color:"+s.find(t=>t.nome==e.municipio).cor+";'>"+("ROBSON"!=h?e.dados[d.center(e.dados,o)][f].toFixed("percentual"==f||"taxa"==f?3:0):e.dados[d.center(e.dados,o)][f][v].toLocaleString("pt-BR",{maximumFractionDigits:"percentual"==f?3:"taxa"==f?2:0}))+"</span>")}
</div>

<div style="display:inline-block; margin-left: 15px; color:#151472; font-size:11px;">
${u[h][f]}
</div>
</div>

</div>
<div>
<center><span class="fonte">Fonte: ${"PM25"==h?"SISAM":"SINASC"}<span></center>
</div>
</div>`:i`<div class="lista-valores interior-trilha" style="display:flex;flex-direction:column;justify-content:space-between;">
<div style="width:180px">
  <span class="titulo-lista-valores">
  ${String(a[n.bisector(e=>e.inicio.getTime()).center(a,o)].inicio.getDate()).padStart(2,"0")+"/"+String(1+a[n.bisector(e=>e.inicio.getTime()).center(a,o)].inicio.getMonth()).padStart(2,"0")} – ${a[n.bisector(e=>e.inicio.getTime()).center(a,o)].termino.toLocaleDateString("pt-BR")}
  </span>
${("ROBSON"!=h?t.filter(e=>e.idx==m&&(!Object.values(r).includes(e.municipio)||"PM25"!=h)).sort((e,t)=>t.dados[d.center(t.dados,o)][f]-e.dados[d.center(e.dados,o)][f]):t.filter(e=>e.idx==m).sort((e,t)=>t.dados[d.center(t.dados,o)][f][v]-e.dados[d.center(e.dados,o)][f][v])).map(e=>"<span class='valor' style='color:"+s.find(t=>t.nome==e.municipio).cor+";'>"+("ROBSON"!=h?e.dados[d.center(e.dados,o)][f].toFixed("percentual"==f||"taxa"==f?3:0):e.dados[d.center(e.dados,o)][f][v].toLocaleString("pt-BR",{maximumFractionDigits:"percentual"==f?3:"taxa"==f?2:0}))+" "+u[h][f]+"</span>")}
</div>
<div>
<center>
${s.some(e=>p.includes(e.nome))?"Dados de UFs n\xe3o dispon\xedveis":""}
<span class="fonte">Fonte: ${"PM25"==h?"SISAM":"SINASC"}<span>
</center>
</div>
</div>`}}function ec(e,t,i,a,n,o){return l=>{let r;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>

<div class="drag-container nova-trilha" style="border:dotted #C4C4C4 2px; border-right:none; height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag" style="cursor:auto;">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>

<div class="trilha" style="width:${n-60}px; margin-left:0px; border-radius: 0 10px 10px 0; border:dotted #C4C4C4 2px; box-shadow:none; height:80px;">
  <div class="cabecalho-trilha" style="border-bottom:dotted #C4C4C4 2px;">
${(r=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),r.append("option").attr("name","").text("ADICIONE UMA TRILHA").property("disabled",!0).property("selected",!0),r.append("option").attr("name","PM25").text("POLUENTE"),r.append("option").attr("name","PESO AO NASCER").text("PESO AO NASCER"),r.append("option").attr("name","GRUPOS DE ROBSON").text("GRUPOS DE ROBSON"),r.append("option").attr("name","TOTAL").text("NASCIMENTOS TOTAIS"),r.on("change",o),r.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function eu(e,t,i,a,n){return o=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>
<div class="sombra" style="border: 3px var(--cor-trilha) solid; border-radius: 10px;">
<div class="drag-container" style="height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>
<div class="trilha" style="width:${n-60}px; margin-left:0px; margin-bottom:0px; height: 80px;">
  <div class="cabecalho-trilha">
  <label class="label-titulo-trilha">CARREGANDO...</label>
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>
</div>`}function ep(e,t,i,a,n,o){return l=>{let r=e.findIndex(e=>e.i==l.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[r]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>i(e,s))),e.splice(r+1,0,s),a.value=e;let c=JSON.parse(JSON.stringify(n.filter(e=>e.idx==l.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,i)=>{i[t].idx=d,i[t].dados.forEach((e,t,i)=>i[t].x=new Date(i[t].x))}),o.value=n.concat(c)}}function em(e,t,i,a){return n=>{e.value=t.filter(e=>e.i!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),i.value=a.filter(e=>e.idx!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function ef(e,t,i,a,n,o,l,r,s,d,c,u,p,m,f,v){return h=>{let b=e.max(t.map(e=>e.i))||0,x=null;switch(h.target.value){case"POLUENTE":x={i:b+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},i.value=t.concat(x),a.forEach(e=>Promise.all([n(e.nome)]).then(t=>{o.value=o.value.concat([{idx:b+1,municipio:e.nome,variavel:"PM25",dados:l(t[0])}])}));break;case"PESO AO NASCER":(x={i:b+1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new r.local(null,null,s.PESO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,x)),i.value=t.concat(x),a.forEach(e=>Promise.all([c(e.nome,x.filtros.expression)]).then(t=>{o.value=o.value.concat([{idx:b+1,municipio:e.nome,variavel:"PESO",dados:u(t[0])}])}));break;case"GRUPOS DE ROBSON":(x={i:b+1,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,filtros:new r.local(null,null,s.ROBSON),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,x)),i.value=t.concat(x),a.forEach(e=>Promise.all([p(e.nome,x.filtros.expression)]).then(t=>{o.value=o.value.concat([{idx:b+1,municipio:e.nome,variavel:"ROBSON",dados:m(t[0])}])}));break;case"NASCIMENTOS TOTAIS":(x={i:b+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new r.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,x)),i.value=t.concat(x),a.forEach(e=>Promise.all([f(e.nome,x.filtros.expression)]).then(t=>{o.value=o.value.concat([{idx:b+1,municipio:e.nome,variavel:"TOTAL",dados:v(t[0])}])}))}}}function ev(e,t,i,a){return n=>{if(!e.find(e=>e.i==n).alterar_tempo)return"";let o=t(104,468,e.find(e=>e.i==n).alterar_tempo[0],e.find(e=>e.i==n).alterar_tempo[1],i-90,40);return o.addEventListener("input",t=>{let i=e;i.find(e=>e.i==n).alterar_tempo=o.value,a.value=i}),o}}function eh(e,t){return i=>{e.find(e=>e.i==i.target.parentElement.parentElement.getAttribute("i")).poluente=i.target.value,t.value=e}}function eb(e,t,i,a,n,o,l,r,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let p=e.find(e=>e.i==u);p.filtros=new i.local(null,a.value.urlids,n[p.variavel]),p.filtros.addEventListener("input",e=>o(e,p)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),l.value.forEach(i=>{Promise.all([r[e.find(e=>e.i==u).variavel](i.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(a=>{t.value=t.value.concat({idx:u,municipio:i.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](a[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function ex(e,t,i){return(a,n)=>{a.target.checked?e.find(e=>e.i==n).alterar_tempo=t:e.find(e=>e.i==n).alterar_tempo=null,i.value=e}}function eg(e,t){return(i,a)=>{e.find(e=>e.i==a).robson=i.target.value,t.value=e}}function ey(e,t){return(i,a)=>{e.find(e=>e.i==a).escala=i.target.value,t.value=e}}function eA(e,t){return(i,a)=>{e.find(e=>e.i==a).mostra_media_movel=i.target.checked,t.value=e}}function eE(e){return t=>{let i=[0,0];return i[0]=e[t[0]].inicio,i[1]=e[t[1]].termino,i}}function ew(){return""}function eC(e,t,i){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new t.local(null,null,i.PESO),show_filtros:!1},{i:2,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,filtros:new t.local(null,null,i.ROBSON),show_filtros:!1}]}function eO(){return{PM25:{valor:"\xb5g/m\xb3"},PESO:{valor:"g"},ROBSON:{absoluto:"nascimentos",percentual:"%",taxa:"nasc./1000NV"},TOTAL:{absoluto:"nascimentos",percentual:"%"}}}function e_(){return 2.5}function eM(){return 2}function eS(){return!0}function eT(e,t){return e?e.municipios:t.municipios}function eI(e,t,i,a,n,o,l,r,s,d,c,u,p,m){if(e){for(let f of t.value)i.value=i.value.concat([f]),f=f.nome,a.forEach(e=>{Promise.all([n[e.variavel](f,o.value.expression)]).then(t=>{l.value=l.value.concat({idx:e.i,municipio:f,variavel:e.variavel,dados:r[e.variavel](t[0])})}),e.show_filtros&&Promise.all([n[e.variavel](f,e.filtros.value.expression)]).then(t=>{l.value=l.value.concat({idx:e.i,municipio:f,variavel:e.variavel,filtrado:!0,dados:r[e.variavel](t[0])})})}),a.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));o.addEventListener("input",e=>d(e)),o.addEventListener("aba",e=>{c.setItem("conf2",JSON.stringify(u())),c.setItem("municipios",JSON.stringify(i.value)),c.setItem("intervalo",JSON.stringify(p.value))}),m.value=!1}}function eR(e,t,i,a){return(n,o)=>{e.value=e.value.filter(e=>e.idx!=o.i||!e.filtrado),t.value.forEach(t=>{Promise.all([i[o.variavel](t.nome,o.filtros.value.expression)]).then(i=>{e.value=e.value.concat({idx:o.i,municipio:t.nome,variavel:o.variavel,filtrado:!0,dados:a[o.variavel](i[0])})})})}}function eN(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function eL(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function ek(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function eP(){return[]}function eD(){return[]}function eF(e,t,i,a){return e[Math.ceil(t.interpolate(...i?i.intervalo:a.intervalo)(.5))].inicio}function eB(e){return e.bisector(e=>e.x)}function e$(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eU(e){return function(t){let i=[];return t.forEach((a,n)=>{if(n<~~(e/2)||n>t.length-~~(e/2)-1)return;let o=0;for(let l=-~~(e/2);l<=~~(e/2);l++)o+=t[n-l].TOTAL;i.push({x:a.x,TOTAL:o/e})}),i}}function eG(e){return e[0]}function eV(e){return e[1]}function eH(e,t,i,a,n){return(o,l)=>{let r=e.find(e=>e.i==l).alterar_tempo,s=e.find(e=>e.i==l).mostra_media_movel?(t-1)/2:0;return r?o.x.getTime()>=i[r[0]-s].inicio.getTime()&&o.x.getTime()<=i[r[1]+s].termino.getTime():o.x.getTime()>=i[a-s].inicio.getTime()&&o.x.getTime()<=i[n+s].termino.getTime()}}function ej(){return 200}function ez(){return!0}function eZ(e,t,i){return function(a,n){if(2==a.length)return;e.value=!0;let o=t.find(e=>e.municipio==a).codigo_sdv,l=`https://storage.googleapis.com/amplia/sisam/${o.substring(0,2)}/mun${o}.db`,r=i.open(l).then(e=>e.query(n));return e.value=!1,r}}function eJ(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function eq(e){return e("municipios2.csv").csv()}function eW(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eX(){return{ACRE:"RIO BRANCO",ALAGOAS:"MACEI\xd3",AMAPÁ:"MACAP\xc1",AMAZONAS:"MANAUS",BAHIA:"SALVADOR",CEARÁ:"FORTALEZA","DISTRITO FEDERAL":"BRAS\xcdLIA","ESP\xcdRITO SANTO":"VIT\xd3RIA",GOIÁS:"GOI\xc2NIA",MARANHÃO:"S\xc3O LU\xcdS","MATO GROSSO":"CUIAB\xc1","MATO GROSSO DO SUL":"CAMPO GRANDE","MINAS GERAIS":"BELO HORIZONTE",PARÁ:"BEL\xc9M",PARAÍBA:"JO\xc3O PESSOA",PARANÁ:"CURITIBA",PERNAMBUCO:"RECIFE",PIAUÍ:"TERESINA","RIO DE JANEIRO":"RIO DE JANEIRO","RIO GRANDE DO NORTE":"NATAL","RIO GRANDE DO SUL":"PORTO ALEGRE",RONDÔNIA:"PORTO VELHO",RORAIMA:"BOA VISTA","SANTA CATARINA":"FLORIAN\xd3POLIS","S\xc3O PAULO":"S\xc3O PAULO",SERGIPE:"ARACAJU",TOCANTINS:"PALMAS"}}function eQ(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function eY(){return[]}function eK(){return[]}function e0(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function e1(e){return Object.values(e).sort(Intl.Collator().compare)}function e2(e){return t=>"BRASIL"==t?"":e.includes(t)?"AND res_SIGLA_UF='"+t+"'":"AND res_MUNNOMEX='"+t.normalize("NFD").replace(/\p{Diacritic}/gu,"")+"'"}function e5(e,t,i){return a=>"BRASIL"==a?"":e.includes(a)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==a)[0]+"'":"mun_geocodsdv="+i.find(e=>e.municipio==a).codigo_sdv}function e3(e){return e`## URL stuff`}function e4(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function e7(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function e6(e,t,i,a){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:i,trilhas:a.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function e8(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[104,469],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:2,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function e9(e,t,i,a){let n=new e(window.location.search).get("conf");if(n)return t(n);if(n=i.getItem("conf2")){let o=JSON.parse(n),l=i.getItem("municipios");l&&(o.municipios=JSON.parse(l));let r=i.getItem("intervalo");return r&&(o.intervalo=JSON.parse(r)),o}if(n=i.getItem("municipios")){let s=a;return s.municipios=JSON.parse(n),n=i.getItem("intervalo"),s.intervalo=JSON.parse(n),s}}function te(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(i){return!1}finally{t.parentNode.removeChild(t)}}}function tt(){return"https://ampliasaude.github.io/trilhas5-2.html"}function ti(e,t,i,a,n){return()=>{let o=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return o.onclick=()=>{n(`${t}?conf=${i(a())}`)},o}}function ta(e){return e`## Poluentes`}function tn(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function to(){return e=>.08206*(e+293.15)}function tl(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function tr(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function ts(e,t){return(i,a="TRUE")=>t(i,`
      select 
        ano,
        mes,
        dia,
        max_${e} as valor,
        temperatura_c_media
      from 
        sisam
      where
          ano >= 2012
      group by
        1,2,3
 `)}function td(e,t,i,a){return n=>{n.forEach(n=>{let o=n,l=new Date(Date.UTC(o.ano,o.mes-1,o.dia));for(let r of e)if(l>=new Date(r.inicio)&&l<=new Date(r.termino)){o.semana=+r.semana,o.x=r.inicio;break}switch(1==o.mes&&53==o.semana&&(o.ano-=1,o.mes=12),t){case"no2_ppb":case"o3_ppb":let s=i[t]/a(o.temperatura);o.valor*=s;case"co_ppb":o.valor/=1e3}});let o=[];for(let l of n){let r=o.find(e=>e.x==l.x);r?(r.valor+=l.valor,r.temperatura_c_media+=l.temperatura_c_media,r.cont+=1):o.push({ano:l.ano,semana:l.semana,x:l.x,valor:l.valor||0,temperatura_c_media:l.temperatura_c_media,cont:1})}return o.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function tc(e){return e`## Fecundação`}function tu(e,t,i){return async(a,n)=>{let o;return await i.fetchPeso(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tp(e){return t=>{t.forEach(t=>{let i=t;for(let a of(i.data=new Date(i.data),e))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let i=[];for(let a of t){let n=i.find(e=>e.x.getTime()==a.x.getTime());n?(n.valor+=a.valor*a.total,n.total+=a.total):i.push({x:a.x,valor:a.valor*a.total,total:a.total})}return i.map(e=>(e.valor/=e.total,delete e.total,e)).filter(e=>e.x)}}function tm(e,t,i){return async(a,n)=>{let o;return await i.fetchRobson(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tf(e,t){return i=>{let a=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let a of(i.data=new Date(i.data),t))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let n=i,o=[];for(let l of n){let r=o.find(e=>e.x.getTime()==l.x.getTime());r?(r.absoluto[l.robson]+=l.total,r.total+=l.total):o.push({x:l.x,absoluto:{Robson1a4:"Robson1a4"==l.robson?l.total:0,Robson5:"Robson5"==l.robson?l.total:0,Robson6a10:"Robson6a10"==l.ig?l.total:0},total:l.total})}return t.filter(e=>!o.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{o.push({x:e.inicio,absoluto:{Robson1a4:0,Robson5:0,Robson6a10:0},total:0})}),(o=o.map(e=>{e.percentual={},e.total?(e.percentual.Robson1a4=100*e.absoluto.Robson1a4/e.total,e.percentual.Robson5=100*e.absoluto.Robson5/e.total,e.percentual.Robson6a10=100*e.absoluto.Robson6a10/e.total):(e.percentual.Robson1a4=0,e.percentual.Robson5=0,e.percentual.Robson6a10=0),e.taxa={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.Robson1a4=1e3*e.absoluto.Robson1a4/t.valor,e.taxa.Robson5=1e3*e.absoluto.Robson5/t.valor,e.taxa.Robson6a10=1e3*e.absoluto.Robson6a10/t.valor):(e.taxa.Robson1a4=0,e.taxa.Robson5=0,e.taxa.Robson6a10=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function tv(e){return t=>{let i=[];t.forEach(t=>{let a=t;if(a.data=new Date(a.data),!(2011>a.data.getFullYear())){for(let n of e)if(a.data>=new Date(n.inicio)&&a.data<=new Date(n.termino)){a.x=n.inicio;break}i.push(a)}});let a=[];for(let n of i){let o=a.find(e=>e.x.getTime()==n.x.getTime());o?o.valor+=n.valor:a.push({x:n.x,valor:n.valor})}return a.filter(e=>e.x)}}function th(e,t,i){return async(a,n)=>{let o;return await i.fetchTotal(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tb(e,t){return i=>{let a=e(i[1]);i=i[0];let n=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let a of t)if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}n.push(i)}});let o=[];for(let l of n){let r=o.find(e=>e.x.getTime()==l.x.getTime());r?r.absoluto+=l.valor:o.push({x:l.x,absoluto:l.valor})}return(o=o.filter(e=>e.x)).map(e=>{e.percentual={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tx(e){return e`## Imports`}function tg(e){return e("sortablejs/Sortable.js")}function ty(e){return e("d3@5")}function tA(e,t,i,a,n,o,l){return function(r,s,d=r,c=s,u=e.width,p=60){var m=[r,s+1],f=e.height,v=e.margin,h=u-p-v.right,b=f-v.top-v.bottom,x=t.scaleLinear().domain(m).range([0,h]),g=t.select(i.svg(u,f));let y=g.append("g").attr("transform",`translate(${p}, ${v.top})`);var A=y.append("text").attr("id","labelleft").attr("x",0).attr("y",b+5).style("display",60==p?"inline":"none").text(a[n[m[0]].inicio.getMonth()]+" "+n[m[0]].inicio.getFullYear()),E=y.append("text").attr("id","labelright").attr("x",0).attr("y",b+5).style("display",60==p?"inline":"none").text(a[n[m[1]].termino.getMonth()]+" "+n[m[1]].termino.getFullYear());y.append("text").attr("id","labelleft2").attr("x",-8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2012),y.append("text").attr("id","labelright2").attr("x",h+8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2019);var w=t.brushX().extent([[0,0],[h,b]]).on("brush",function(){var e=t.event.selection;A.attr("x",e[0]).text(a[n[Math.round(x.invert(e[0]))].inicio.getMonth()]+" "+n[Math.round(x.invert(e[0]))].inicio.getFullYear()),E.attr("x",e[1]).text(a[n[Math.round(x.invert(e[1]))].termino.getMonth()]+" "+n[Math.round(x.invert(e[1]))].termino.getFullYear()),_.attr("display",null).attr("transform",function(t,i){return"translate("+[e[i],-b/4]+")"}),g.node().value=e.map(e=>Math.round(x.invert(e))),g.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(x.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(x)),o.value=Math.max(Math.min(new Date(o.value),n[g.node().value[1]-2].termino),n[g.node().value[0]].inicio)}}),C=y.append("g").attr("class","brush").call(w),O=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},_=C.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",b/2).attr("d",O);return C.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=x(1)-x(0),t=l.mouse(this)[0],i=t-e/2,a=t+e/2;l.select(this.parentNode).call(w.move,a>h?[h-e,h]:i<0?[0,e]:[i,a])}),C.call(w.move,[d,c+1].map(x)),y.append("g").selectAll("line").data(n.filter(e=>1==e.semana).map(e=>n.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>x(e)).attr("x2",e=>x(e)).attr("y1",0).attr("y2",b).style("stroke","#ccc"),g.node()}}function tE(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function tw(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

rect.overlay {
	stroke: none;
}

rect.selection {
	stroke: none;
  fill: rgba(21, 20, 114, 0.6);
}

#labelleft, #labelright, #labelright2, #labelleft2 {
	dominant-baseline: hanging;
  font-size: 12px;
  font-weight: 400;
  fill: #151472;
}

#labelleft, #labelleft2 {
	text-anchor: end;
}

#labelright, #labelright2 {
	text-anchor: start;
}
</style>
`}function tC(e){return e("https://bundle.run/lz-string@1.4.4")}function tO(e){return e`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>
`}function t_(e,t,i){return e`
<div class="custom-select" style="width:200px;">
  <select>
<option value="Adicione um local">Adicione um local</option>
${t.map(e=>"<option value='"+e+"'>"+e+"</option>")}
${i.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>"<option value='"+e+"'>"+e+"</option>")}
  </select>
</div>
`}function tM(e){return e`
<style>
/* The container must be positioned relative: */
.custom-select {
  position: relative;
  font-family: "Roboto Condensed";
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 80px;
  max-width: 240px;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #000 transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #000 transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div {
  color: #000000;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
`}function tS(e){var t,i,a,n,o,l,r,s,d;for(i=0,n=(t=document.getElementsByClassName("custom-select")).length;i<n;i++){for(o=(l=t[i].getElementsByTagName("select")[0]).length,(r=document.createElement("DIV")).setAttribute("class","select-selected"),r.innerHTML=l.options[l.selectedIndex].innerHTML,t[i].appendChild(r),(s=document.createElement("DIV")).setAttribute("class","select-items select-hide"),a=1;a<o;a++)(d=document.createElement("DIV")).innerHTML=l.options[a].innerHTML,d.addEventListener("click",function(e){var t,i,a,n,o,l,r;for(i=0,l=(n=this.parentNode.parentNode.getElementsByTagName("select")[0]).length,o=this.parentNode.previousSibling;i<l;i++)if(n.options[i].innerHTML==this.innerHTML){for(a=0,n.selectedIndex=i,o.innerHTML=this.innerHTML,r=(t=this.parentNode.getElementsByClassName("same-as-selected")).length;a<r;a++)t[a].removeAttribute("class");this.setAttribute("class","same-as-selected");break}o.click()}),s.appendChild(d);t[i].appendChild(s),r.addEventListener("click",function(e){e.stopPropagation(),c(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function c(e){var t,i,a,n,o,l=[];for(a=0,t=document.getElementsByClassName("select-items"),i=document.getElementsByClassName("select-selected"),n=t.length,o=i.length;a<o;a++)e==i[a]?l.push(a):i[a].classList.remove("select-arrow-active");for(a=0;a<n;a++)l.indexOf(a)&&t[a].classList.add("select-hide")}document.addEventListener("click",c)}function tT(e,t){let a=e.module();function n(){return this.url}let o=new Map([["semanas_epidemiologicas_estendido.csv",{url:new i.U(i(3656)),mimeType:"text/csv",toString:n}],["municipios2.csv",{url:new i.U(i(474)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>o.get(e))),a.variable(t()).define(["md"],R),a.variable(t("cabecalho")).define("cabecalho",["html","copyLinkButton"],N),a.define("initial mp",["urlParamConf","ampliaMenu"],L),a.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),a.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),a.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],k),a.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],P),a.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","updateTooltipPositon","d3"],D),a.variable(t("updateTooltipPositon")).define("updateTooltipPositon",F),a.variable(t("maxMunicipios")).define("maxMunicipios",B),a.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],$),a.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),a.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],U),a.variable(t("menu_municipios")).define("menu_municipios",["d3","html","agregacoes","municipios","sel_municipios","maxMunicipios","mutable sel_municipios","colors","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],G),a.variable(t("btn_adicionar_municipio")).define("btn_adicionar_municipio",["d3","municipios","sel_municipios","mutable sel_municipios","colors","cache","mutable data","data","fetchPM25","fetchPESO","fetchRobson","procPM25","procPESO","procRobson"],V),a.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","mutable data","data","agregacoes","municipios"],H),a.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],j),a.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],z),a.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gPESO","gROBSON","gTOTAL"],Z),a.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procPESO","procRobson","procTOTAL"],J),a.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchPESO","fetchRobson","fetchTOTAL"],q),a.variable(t("style")).define("style",["html","height"],W),a.variable(t("corTrilha")).define("corTrilha",X),a.variable(t("corTrilhaFraco")).define("corTrilhaFraco",Q),a.variable(t("legendTooltip")).define("legendTooltip",["d3","valoresLista","corTrilhaFraco"],Y),a.variable(t("valoresLista")).define("valoresLista",["sel_municipios","data","semanas_epidemiologicas","d3","sel","unidades","agregacoes","siglas","bisector"],K),a.variable(t("mouseDisplace")).define("mouseDisplace",ee),a.variable(t("iconeContinuo")).define("iconeContinuo",["svg"],et),a.variable(t("iconeTracejado")).define("iconeTracejado",["svg"],ei),a.variable(t("iconeEspesso")).define("iconeEspesso",["svg"],ea),a.variable(t("iconeFino")).define("iconeFino",["svg"],en),a.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel","legendTooltip","mutable sel","mouseDisplace","d3","html","corTrilha","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider"],eo),a.variable(t("gPESO")).define("gPESO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mutable sel","d3","mouseDisplace","html","corTrilha","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider","checkFiltros"],el),a.variable(t("gROBSON")).define("gROBSON",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mutable sel","d3","mouseDisplace","html","corTrilha","removeTrilha","copy_button","checkRobson","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],er),a.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mutable sel","d3","mouseDisplace","html","corTrilha","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],es),a.variable(t("gListaValores")).define("gListaValores",["conf_trilhas","data","html","semanas_epidemiologicas","d3","sel","iconeEspesso","siglas","sel_municipios","bisector","iconeFino","unidades","agregacoes"],ed),a.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","addTrilha"],ec),a.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],eu),a.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],ep),a.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],em),a.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchPESO","procPESO","fetchRobson","procRobson","fetchTOTAL","procTOTAL"],ef),a.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],ev),a.variable(t("checkPoluente")).define("checkPoluente",["conf_trilhas","mutable conf_trilhas"],eh),a.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],eb),a.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],ex),a.variable(t("checkRobson")).define("checkRobson",["conf_trilhas","mutable conf_trilhas"],eg),a.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],ey),a.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],eA),a.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],eE),a.define("initial conf_principal",ew),a.variable(t("mutable conf_principal")).define("mutable conf_principal",["Mutable","initial conf_principal"],(e,t)=>new e(t)),a.variable(t("conf_principal")).define("conf_principal",["mutable conf_principal"],e=>e.generator),a.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],eC),a.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),a.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),a.variable(t("unidades")).define("unidades",eO),a.variable(t("lineWidth")).define("lineWidth",e_),a.variable(t("lineWidthFiltered")).define("lineWidthFiltered",eM),a.define("initial firstload",eS),a.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),a.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),a.define("initial municipiosDefault",["urlParamConf","defaultConf"],eT),a.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),a.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),a.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","sessionStorage","getCurrentConf","viewof intervalo","mutable firstload"],eI),a.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],eR),a.variable(t("viewof janela")).define("viewof janela",["Inputs"],eN),a.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),a.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],eL),a.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),a.variable(t("colors")).define("colors",ek),a.define("initial sel_variaveis",eP),a.variable(t("mutable sel_variaveis")).define("mutable sel_variaveis",["Mutable","initial sel_variaveis"],(e,t)=>new e(t)),a.variable(t("sel_variaveis")).define("sel_variaveis",["mutable sel_variaveis"],e=>e.generator),a.define("initial sel_municipios",eD),a.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),a.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),a.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eF),a.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),a.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),a.variable(t("bisector")).define("bisector",["d3"],eB),a.variable(t("formatTime")).define("formatTime",["d3"],e$),a.variable(t("computaMediaMovel")).define("computaMediaMovel",["janela"],eU),a.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eG),a.variable(t("periodoFim")).define("periodoFim",["intervalo"],eV),a.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],eH),a.variable(t("height")).define("height",ej),a.define("initial loading",ez),a.variable(t("mutable loading")).define("mutable loading",["Mutable","initial loading"],(e,t)=>new e(t)),a.variable(t("loading")).define("loading",["mutable loading"],e=>e.generator),a.variable(t("sqlSisam")).define("sqlSisam",["mutable loading","municipios","SQLiteDatabaseClient"],eZ),a.variable(t("style2")).define("style2",["html"],eJ),a.variable(t("municipios")).define("municipios",["FileAttachment"],eq),a.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eW),a.variable(t("capitais")).define("capitais",eX),a.variable(t("siglas")).define("siglas",eQ),a.define("initial data",eY),a.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),a.variable(t("data")).define("data",["mutable data"],e=>e.generator),a.define("initial cache",eK),a.variable(t("mutable cache")).define("mutable cache",["Mutable","initial cache"],(e,t)=>new e(t)),a.variable(t("cache")).define("cache",["mutable cache"],e=>e.generator),a.variable(t("months")).define("months",e0),a.variable(t("agregacoes")).define("agregacoes",["siglas"],e1),a.variable(t("queryLocalSINASC")).define("queryLocalSINASC",["agregacoes"],e2),a.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],e5),a.variable(t()).define(["md"],e3),a.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],e4),a.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],e7),a.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],e6),a.variable(t("defaultConf")).define("defaultConf",e8),a.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],e9),a.variable(t("copyToClipboard")).define("copyToClipboard",te),a.variable(t("currentHref")).define("currentHref",tt),a.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],ti),a.variable(t()).define(["md"],ta),a.variable(t("maxScale")).define("maxScale",tn),a.variable(t("volume_mol")).define("volume_mol",to),a.variable(t("massa_mol")).define("massa_mol",tl),a.variable(t("padroes")).define("padroes",tr),a.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],ts),a.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],td),a.variable(t()).define(["md"],tc),a.variable(t("fetchPESO")).define("fetchPESO",["agregacoes","municipios","newDataSource"],tu),a.variable(t("procPESO")).define("procPESO",["semanas_epidemiologicas"],tp),a.variable(t("fetchRobson")).define("fetchRobson",["agregacoes","municipios","newDataSource"],tm),a.variable(t("procRobson")).define("procRobson",["procTOTALUnfiltered","semanas_epidemiologicas"],tf),a.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],tv),a.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","newDataSource"],th),a.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],tb),a.variable(t()).define(["md"],tx),a.variable(t("Sortable")).define("Sortable",["require"],tg),a.variable(t("d3_5")).define("d3_5",["require"],ty),a.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","months","semanas_epidemiologicas","mutable sel","d3"],tA),a.variable(t("layout")).define("layout",tE),a.variable(t("style_slider")).define("style_slider",["html"],tw);let l=e.module(I);return a.import("menuCaracteristicasNascimento","ampliaMenu",l),a.import("datasource","newDataSource",l),a.variable(t("lz")).define("lz",["require"],tC),a.variable(t("style_menu")).define("style_menu",["html"],tO),a.variable(t("novoMenuMun")).define("novoMenuMun",["html","agregacoes","municipios"],t_),a.variable(t("styleMenuMun")).define("styleMenuMun",["html"],tM),a.variable(t("initializeMenuMun")).define("initializeMenuMun",["novoMenuMun"],tS),a}i.d(t,{Z:function(){return tT}})}}]);