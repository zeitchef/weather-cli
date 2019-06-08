const axios = require('axios')

module.exports = async () => {
  const results = await axios.get('https://ipapi.co/json')
  const { city, region } = results.data

  return `${city}, ${region}`
}
