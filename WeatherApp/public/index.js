const searchElement = document.querySelector('[data-city-search]')

searchElement.addEventListener('change', (event) => {
  fetch('/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      location: event.target.value
    })
  }).then(res => res.json()).then(data => {
    setWeather(data)
  })
})

let setWeather = (data) => {
  console.log(data)
}