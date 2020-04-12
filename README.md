# weather-cli

Get current weather conditions and a weekly forecast.

## Installation

- `git clone`
- `yarn install`

You'll also need to make sure you have environment variables set for the Darksky
and Mapbox API.

## Usage

```
weather [command] <options>

Commands:
  today ............. show weather for today
  forecast .......... show 10-day weather forecast
  version ........... show package version
  help .............. show help menu for a command`

Options:
  --location, -l .... the provided location (optional)
```

If you don't provide a location via the `--location` flag, the IP address of
your client will be used.

## Examples

Get the current weather conditions for Berlin, Germany:

```
// If you live in Berlin
weather today

// If you don't live in Berlin
weather today --location="Berlin"
```

Get an 8-day forecast for New York, NY:

```
// If you live in New York
weather forecast

// If you don't live in New York
weather forecast --location="New York, NY"
```

## Reference

https://timber.io/blog/creating-a-real-world-cli-app-with-node/
