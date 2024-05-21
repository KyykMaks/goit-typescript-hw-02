import toast from "react-hot-toast";
import axios, { AxiosResponse } from "axios";

const API_KEY = "bHeBhf-uwB5Rp_zf5-Vms1fs24r9_HsqToDJVSlsGdg";

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

export interface UnsplashResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

interface UnsplashPhoto {
  id: string;
  urls: {
      small: string;
  };
  alt_description: string;
}


export const fetchAPI = async (topic: string, page: number): Promise<UnsplashResponse> => {
    try {
        const response: AxiosResponse<UnsplashResponse> = await axios.get(`/search/photos?page=${page}&query=${topic}&per_page=${20}`);
        return response.data;
    } catch (error) {
        toast.error("Don't work");
        throw error;
    }
}