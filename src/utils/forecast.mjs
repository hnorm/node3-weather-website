import request from 'postman-request'

const weatherstackForecast = (latitude, longitude, callback) => {
    const weatherstackURL = 'http://api.weatherstack.com/current?access_key=' + process.env.WEATHERSTACK_API_KEY + '&query=' + latitude + ',' + longitude

    request({ url: weatherstackURL, json: true }, (error, {
        body: { error: { info: serviceError } = {} },
        body: { location },
        body: { current: { weather_icons, weather_descriptions, temperature, feelslike } = {} }
    }) => {
        if (error) {
            callback('Could not connect to weather service', undefined)
        }
        else if (serviceError) {
            callback(serviceError, undefined)
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

const openweatherForecast = (latitude, longitude, callback) => {
    const openweatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=6b2907edd06afa3b8bad8432fd08391e'

    request({ url: openweatherURL, json: true }, (error, {
        body: { message: serviceError },
        body: { name: location },
        body: { weather: [{ description, icon }] },
        body: { main: { temp, feels_like } }
    }) => {
        if (error) {
            callback('Could not connect to weather service', undefined)
        }
        else if (serviceError) {
            callback(serviceError, undefined)
        }
        else {
            callback(undefined, {
                location,
                weather_icons: "https://openweathermap.org/img/w/" + icon + ".png",
                weather_descriptions: [description],
                temperature: temp,
                feelslike: feels_like
            })
        }
    })
}

export default openweatherForecast