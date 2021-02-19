require('dotenv').config();
const fetch = require('node-fetch');

export const getPlaceName = async (placeId) => {
  const apiKey = process.env.MAPBOX_TOKEN;

  const placeName = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=${apiKey}`)
  // console.log(placeName);

}
