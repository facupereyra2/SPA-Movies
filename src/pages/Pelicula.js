import getDataMovie from "../utils/getDataMovie";
import getHash from "../utils/getHash";

const Pelicula = async () => {
    const id = getHash();
    const movie = await getDataMovie(id);
    const img_url = 'https://image.tmdb.org/t/p/w500';
    
    const view = `
        <div class="Movies-inner">
            <article class="Movies-card">
            <img src="${img_url}${movie.poster_path}" alt="name"/>
                <h1>${movie.title}</h1>
            </article>
                <article class="Info">
                    <h2>${movie.overview} </h2>
                    <h3>Lenguaje original: ${movie.original_language} </h3>
                    <h3>Presupuesto: $${movie.budget} </h3>
                    <h3>Ganacia: $${movie.revenue} </h3>
                    <h3>Promedio de votos: ${movie.vote_average} </h3>
                </article>
        </div>
    `;
    return view;

}

export default Pelicula;