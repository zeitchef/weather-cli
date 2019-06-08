module.exports = (message, exit) => {
  console.error('ERROR'.red.inverse, message)
  exit && process.exit(1)
}
