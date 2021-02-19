require('dotenv').config();
const fetch = require('node-fetch');

export const getPlaceName = async (placeFrom, placeTo) => {
  const apiKey = process.env.MAPBOX_TOKEN;
  const placeArr = [placeFrom, placeTo]

  const getName = async (placeName) => {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${placeName}.json?limit=1&access_token=${apiKey}`);
    const body = await response.json();
    const id = body.features[0].id
    return id;
  }

  const promises = placeArr.map(async i => await getName(i));

  return Promise.all(promises);
}
