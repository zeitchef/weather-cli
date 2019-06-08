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

    console.log(`Current conditions in ${location}:`)
    console.log(`\t${weather.currently.temperature}°F - ${weather.currently.summary}`)
  } catch (error) {
    spinner.stop()
    console.error('ERROR'.red.inverse, error.message)
  }
}
