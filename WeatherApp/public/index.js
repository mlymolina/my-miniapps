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
  }).catch(error => {
    console.log('Error')
  })
})

let setWeather = (data) => {
  console.log(data)
  setLocation(data.name, data.sys.country)
  console.log(convertKelvinToFahrenheit(data.main.temp))
  console.log(convertKelvinToCelsius(data.main.temp))
}

let convertKelvinToFahrenheit = (kelvinValue) => {
  return ((kelvinValue-273.15) * (9/5) + 32)
}

let convertKelvinToCelsius = (kelvinValue) => {
  return(kelvinValue -273.15)
}

let setLocation = (city, country) => {
  const location = document.querySelector('#city')
  location.textContent = city + ', ' + country; 
}

let setWeatherDescription = () => {

}

let setTemperature = () => {

}