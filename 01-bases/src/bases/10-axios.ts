import axios from 'axios';
import type { GIFResponse } from '../interfaces/gif.response';

const apiKey = '';

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

//export default giphyAPI;

// giphyAPI.get<GIFResponse>('/random')
//     .then(resp => console.log(resp.data.data.images.downsized_large.url))
//     .catch(err => console.log(err));