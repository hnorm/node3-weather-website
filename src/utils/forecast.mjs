import request from 'postman-request'

const forecast = (latitude, longitude, callback) => {
    const weatherstackURL = 'http://api.weatherstack.com/current?access_key=6ae1e1f3dc367db7cc7dcd0a619c9927&query=' + latitude + ',' + longitude

    request({ url: weatherstackURL, json: true }, (error, {
        body: { error: serviceError },
        body: { location },
        body: { current: { weather_icons, weather_descriptions, temperature, feelslike } = {} }
    }) => {
        if (error) {
            callback('Could not connect to weather service', undefined)
        }
        else if (serviceError) {
            callback('Invalid request to weather service', undefined)
        }
        else {
            callback(undefined, {
                location: location.name + ", " + location.region + ", " + location.country,
                weather_icons,
                weather_descriptions,
                temperature,
                feelslike
            })
        }
    })
}

export default forecast