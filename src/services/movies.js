import axiosInstance from "./base"; 
 
const getGenres = async () => { 
  try { 
    const { data } = await axiosInstance.get("/genre/movie/list"); 
    return data.genres; 
  } catch (error) { 
    console.error(error); 
  } 
}; 
 
const getMovies = async (page, genres) => { 
  try { 
    const { data } = await axiosInstance.get("/discover/movie", { 
      params: { 
        page, 
        with_genres: genres ? genres.join(",") : undefined, 
      }, 
    }); 
 
    return data; 
  } catch (error) { 
    console.error(error); 
  } 
}; 
 
const getMovieById = async (id) => { 
  try { 
    const { data } = await axiosInstance.get(`/movie/${id}`); 
    return data; 
  } catch (error) { 
    console.log(error); 
  } 
}; 
 
const getMovieCast = async (id) => { 
  try { 
    const { data } = await axiosInstance.get(`/movie/${id}/credits`); 
    return data; 
  } catch (error) { 
    console.error(error); 
  } 
}; 
 
const getTrailer = async (id) => { 
  try { 
    const { data } = await axiosInstance.get(`/movie/${id}/videos`); 
    return data; 
  } catch (error) { 
    console.error(error); 
  } 
}; 
 
const moviePageApi = { 
  getGenres, 
  getMovies, 
  getMovieById, 
  getMovieCast, 
  getTrailer, 
}; 
 
export default moviePageApi;