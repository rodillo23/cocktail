(()=>{"use strict";const t=async()=>{const t=await(async()=>{try{const t=await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");return await t.json()}catch(t){console.log("Error al hacer fetch",t)}})(),e=document.getElementById("search"),n=document.getElementById("form"),a=document.createElement("select"),s=document.createElement("input");a.setAttribute("id","select"),a.setAttribute("name","c"),s.setAttribute("type","submit"),s.setAttribute("value","Buscar"),s.classList.add("button"),t.drinks.map((t=>{const e=document.createElement("option");e.textContent=t.strCategory,e.setAttribute("value",t.strCategory),a.appendChild(e)})),n.appendChild(a),n.appendChild(s),e.appendChild(n)},e={"/":()=>'\n    <div class="home-container container">\n      <img src="assets/img/drink.svg" alt="drinks-image" width="200"/>\n      <h2>Select a Category!!!</h2>\n    </div>\n  ',"/drinks":async t=>{const e=await(async t=>{if(t.includes("="))var e=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${t}`;try{const t=await fetch(e);return await t.json()}catch(t){console.log("Error en la solicitud",t)}})(t);return console.log(e),`\n    <div class="container drinksContainer">\n    ${e.drinks.map((t=>`\n      <article class="card">\n        <img src="${t.strDrinkThumb||"assets/img/no-image.jpg"}" alt"${t.strDrink}"/>\n        <p>${t.strDrink}</p>\n      </article>\n    `)).join("")}\n    </div>\n  `}};window.addEventListener("load",(async()=>{let n;const a=document.getElementById("header"),s=document.getElementById("content");a.innerHTML=await'\n    <div class="container header-container">\n      <nav>\n        <a href=""><img src="assets/img/logo.png" class="logo"/></a>\n      </nav>\n    </div>\n  ',t(),document.getElementById("form").addEventListener("submit",(async t=>{t.preventDefault(),n=`c=${t.target[0].value}`;const a=await(t=>{if(t.length>=1)return"/"===t?t:"/drinks"})(n);console.log(a);let i=e[a]&&e[a];s.innerHTML=await i(n)}))}))})();