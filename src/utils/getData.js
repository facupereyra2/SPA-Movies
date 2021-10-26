const API_KEY = '6601dacec6ccc9bb863675b67411b921';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';


const getData = async () =>{

    const apiURL = `${BASE_URL}?api_key=${API_KEY}&sort_by=vote_count.desc`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ",error);
    }
};

export default getData;