import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'Z73kEisIPtPkApP4h16UKltuFDm6828Q'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then(resp => resp.json())
    .then((body: GIFResponse) => {
        console.log(body.data.images.downsized_medium.url);   
    })
    .catch(err => console.warn(err));