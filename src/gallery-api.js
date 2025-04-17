import axios from "axios";

export const fetchGalleryPicturesFromTopic = async (query, page) => {
    const API_KEY = "q_ilJfeXbJ7aLVkUf1TArJA5EUScrQgLm08H3UJvYpI";
    axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
    const response = await axios.get(
    `?client_id=${API_KEY}&page=${page}&query=${query.split("/")[1]}`
    );
    return response.data;
};