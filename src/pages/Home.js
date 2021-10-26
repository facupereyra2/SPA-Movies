import getData from "../utils/getData";

const Home = async() =>{

    const peliculas = await getData();
    //const {title, poster_path, vote_average, overview, id, release_date} = peliculas;

    const img_url = 'https://image.tmdb.org/t/p/w500'

    const view = `
            ${peliculas.results.map(pelicula => `
                <article class="pelicula">
                    <a href="#/${pelicula.id}">
                        <h2>${pelicula.original_title}</h2>
                        <img src="${img_url}${pelicula.poster_path}" alt="${pelicula.title}"/>
                        <p>Fecha de estreno: ${pelicula.release_date}</p>
                    </a>
                </article>
            `).join('')}
    `;
    
    return view;
}

export default Home;
