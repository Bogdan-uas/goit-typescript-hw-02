import axios from "axios";

interface IImage {
id: string;
urls: {
    small: string;
    regular: string;
};
alt_description: string;
}

const API_KEY = "q_ilJfeXbJ7aLVkUf1TArJA5EUScrQgLm08H3UJvYpI";
const baseUrl = "https://api.unsplash.com/";

export const requestImages = async (): Promise<IImage[]> => {
    const { data } = await axios.get(
        `${baseUrl}/search/photos?client_id=${API_KEY}`
    );
return data;
};

export const requestImagesByQuery = async (query = "", page = 1) => {
    const { data } = await axios.get(
        `${baseUrl}/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
    );
return data;
};