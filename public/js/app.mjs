const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherIcon = document.querySelector('#weather-icon')

weatherForm.addEventListener('submit', e => {
    e.preventDefault()

    if (!search.value) {
        return messageOne.textContent = "Please enter a location"
    }

    messageOne.textContent = "Fetching weather forecast..."
    weatherIcon.src = ""
    messageTwo.textContent = ""

    fetch('/weather?address=' + search.value).then(response => {
        response.json().then(({ error, location, weather_icons, weather_descriptions, temperature, feelslike }) => {
            if (error) {
                messageOne.textContent = error
            }
            else {
                messageOne.textContent = location
                weatherIcon.src = weather_icons
                messageTwo.textContent = weather_descriptions[0] + ", " + temperature + " degrees out, feels like " + feelslike + " degrees."
            }
        })
    })
})