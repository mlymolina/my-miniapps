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
    resetSearch()
  })
})

let setWeather = (data) => {
  console.log(data)
  if (data.name) {
    setLocation(data.name, data.sys.country)
  } else {
    resetSearch()
  }
  
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
  location.textContent = city + ', ' + country
  document.getElementById('warning-msg').textContent = ""
  document.getElementById('warning').textContent = ""
  document.getElementById('city-search').value = ""
}

let resetSearch = () => {
  const msg = document.querySelector('#warning-msg')
  msg.textContent = "** Location do not exist or wrong format **"
  document.querySelector('#city-search').value = ""
  document.querySelector('#city').textContent = "Enter A Location"
  document.querySelector('#warning').textContent = "To Find The Weather"
}

let setWeatherDescription = () => {

}

let setTemperature = () => {

}