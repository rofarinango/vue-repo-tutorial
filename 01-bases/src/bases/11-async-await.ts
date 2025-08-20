import type { GIFResponse } from "../interfaces/gif.response";
import { giphyAPI } from "./10-axios";

export const getImage = async() => {

    try {
        const resp = await giphyAPI.get<GIFResponse>('/random');
        return resp.data.data.images.downsized_large.url
    } catch (error) {
        throw 'url no encontrado'
    }
}

export const getImagePromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('https://url-de-mi-sitio-web/image1.jpg');
        }, 1000);
    })
}

getImage().then((url) => console.log({url}))
    .catch( error => console.log({error}));
