import request from 'postman-request'

const geocode = (address, callback) => {
    const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + process.env.MAPBOX_API_KEY + '&limit=1'

    request({ url: geocodingURL, json: true }, (error, { body: { features: features } }) => {
        if (error) {
            callback('Could not connect to location service', undefined)
        }
        else if (features.length === 0) {
            callback('Location not found')
        }
        else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

export default geocode