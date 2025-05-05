import axios from "axios";
import {Image} from './App'

const ACCESS_KEY: string = 'dzWHEkRwdAK-kYxqKeOqm0KPr_VRA4BcIOrFg0cjdVg';

interface ImageObject {
    images: Image[];
    totalHits: number;
}

export default async function fetchImages (img: string, page: number, itemsPerPage: number): Promise<ImageObject> {
    
    const resp = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${img}&per_page=${itemsPerPage}&page=${page}`);
    
    return {
        images: resp.data.results, 
        totalHits: resp.data.total,
    };
}