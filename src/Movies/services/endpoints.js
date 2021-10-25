import axios from 'axios'

export async function getAllMovies(){
    const response = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
    const config_path = await axios(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
    const genre_data = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    
    const result = {
        results: response.data.results,
        config_path: config_path.data.images,
        genre_data: genre_data.data.genres,
    }
    // console.log("response", response)

    if (response.status === 200) return result
    else return []
    
}