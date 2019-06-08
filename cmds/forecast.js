const ora = require('ora')
const getCoordinates = require('../utils/coordinates')
const getLocation = require('../utils/location')
const getWeather = require('../utils/weather')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || await getLocation()
    const coordinates = await getCoordinates(location)
    const weather = await getWeather(coordinates)

    spinner.stop()

    console.log(`Forecast for ${location}:`)
    weather.daily.forEach(item => {
      const tempLow = Math.round(item.temperatureLow)
      const tempHigh = Math.round(item.temperatureHigh)

      console.log(`\tLow: ${tempLow}°F | High: ${tempHigh}°F | ${item.summary}`)
    })
  } catch (error) {
    spinner.stop()
    console.error(error)
  }
}
