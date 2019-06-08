const axios = require('axios')

module.exports = async (location) => {
  const key = process.env.MAPBOX_API_KEY
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${key}`

  try {
    const response = await axios({ method: 'get', url })
    const [ longitude, latitude ] = response.data.features[0].center

    return `${latitude},${longitude}`
  } catch (error) {
    console.log('ERROR'.red.inverse, error.message)
  }
}
