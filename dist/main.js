(()=>{"use strict";const e=async()=>`\n            ${(await(async e=>{const n=e?`${BASE_URL}${e}?api_key=6601dacec6ccc9bb863675b67411b921`:"https://api.themoviedb.org/3/movie/popular?api_key=6087b10f69226991c20e7ec34c8ef417";try{const e=await fetch(n),a=await e.json();return console.log(a),a}catch(e){console.log("Error: ",e)}})()).results.map((e=>`\n                <article class="pelicula">\n                    <a href="#/1>\n                        <img src="image" alt="name"/>\n                        <h2>${e.title}</h2>\n                        <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="name"/>\n                        <p>Fecha de estreno: ${e.release_date}</p>\n                    </a>\n                </article>\n            `)).join("")}\n    `,n=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/">\n                       TMDB Movies\n                    </a>\n                </h1>\n            </div>\n    ',a.innerHTML=await e()};window.addEventListener("load",n),window.addEventListener("hashchange",n)})();