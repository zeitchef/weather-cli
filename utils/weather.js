const axios = require('axios')

module.exports = async (coordinates) => {
  const key = process.env.DARKSKY_API_KEY
  const url = `https://api.darksky.net/forecast/${key}/${coordinates}`

  try {
    const response = await axios({method: 'get', url})
    return {
      currently: {
        summary: response.data.currently.summary,
        temperature: Math.round(response.data.currently.temperature)
      },
      daily: response.data.daily.data
    }
  } catch (error) {
    console.log(error)
  }
}
