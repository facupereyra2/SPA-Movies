import Error404 from '../pages/Error404';

const API_KEY = "6601dacec6ccc9bb863675b67411b921";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const getDataMovie = async (id) =>{
    const apiURL = id 
            ? `${BASE_URL}${id}?api_key=${API_KEY}&language=es`: Error404;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
    } catch(err){
        console.log(err);
    };
};

export default getDataMovie;

