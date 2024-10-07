import axiosInstance from "./base"; 
 
const getGenres = async () => { 
  try { 
    const { data } = await axiosInstance.get("/genre/tv/list"); 
    return data.genres; 
  } catch (error) { 
    console.error(error); 
  } 
}; 
 
const getSeries = async (page, genres) => { 
  try { 
    const { data } = await axiosInstance.get("/discover/tv", { 
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
 
const getSerieById = async (id) => { 
  try { 
    const { data } = await axiosInstance.get(`/tv/${id}`); 
    return data; 
  } catch (error) { 
    console.log(error); 
  } 
}; 
 
const getSerieCast = async (id) => { 
  try { 
    const { data } = await axiosInstance.get(`/tv/${id}/credits`); 
    return data; 
  } catch (error) { 
    console.error(error); 
  } 
}; 
 
const getTrailer = async (id) => { 
  try { 
    const { data } = await axiosInstance.get(`/tv/${id}/videos`); 
    return data; 
  } catch (error) { 
    console.error(error); 
  } 
}; 
 
const moviePageApi = { 
  getGenres, 
  getSeries, 
  getSerieById, 
  getSerieCast,
  getTrailer, 
}; 
 
export default moviePageApi;