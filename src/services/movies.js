import axiosInstance from "./base";

const getGenres = async () => {
    try {
        const { data } = await axiosInstance.get("/genre/movie/list");
        return data.genres;
    } catch (error) {
        console.error(error);
    }
 };

 const getMovies = async () => {
    try {
        const { data } = await axiosInstance.get("/discover/movie");
        return data;
    } catch (error) {
        console.error(error);
    }
 };

 const moviePageApi = {
    getGenres,
    getMovies,
 };

 export default moviePageApi;