import axios from "axios"; 

const baseURL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
    baseURL
});

axiosInstance.defaults.params = {
    language: "en-US",
    api_key: "824e7a88762ced7e02c4b41d907050e1",
};

export default axiosInstance;