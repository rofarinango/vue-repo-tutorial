const apiKey = 'Z73kEisIPtPkApP4h16UKltuFDm6828Q'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then(resp => resp.json())
    .then(({data}) => console.log({data}))
    .catch(err => console.warn(err));