import express from 'express'
import hbs from 'hbs'
import forecast from './utils/forecast.mjs'
import geocode from './utils/geocode.mjs'

const app = express()
app.set('view engine', 'hbs')
app.set('views', 'templates/views')
app.use(express.static('public'))

hbs.registerPartials('templates/partials')

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Norman Hu'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Read about us!',
        name: 'Norman Hu'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Get some help!',
        name: 'Norman Hu',
        helpText: 'This is some helpful text...'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            erorr: 'No address provided'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                address: req.query.address,
                location: location,
                forecast: forecastData
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Norman Hu',
        errorText: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Norman Hu',
        errorText: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})