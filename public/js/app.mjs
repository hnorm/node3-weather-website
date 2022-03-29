const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', e => {
    e.preventDefault()

    if (!search.value) {
        return messageOne.textContent = "Please enter a location"
    }

    messageOne.textContent = "Fetching weather forecast..."
    messageTwo.textContent = ""
    
    fetch('http://localhost:3000/weather?address=' + search.value).then(response => {
        response.json().then(({error, location, forecast}) => {
            if (error) {
                messageOne.textContent = error
            }
            else {
                messageOne.textContent = location
                messageTwo.textContent = forecast
            }
        })
    })
})