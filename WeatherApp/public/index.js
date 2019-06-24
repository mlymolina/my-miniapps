const searchElement = document.querySelector('[data-city-search]')

searchElement.addEventListener('change', (event) => {
  fetch('/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      location: event.target.value
    })
  }).then( res => res.json()).then(data => {
    console.log(data)
  })
})
