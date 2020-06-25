function fetchWeather(city) {
  return  fetch('http://api.weatherstack.com/current?access_key=70b0798407f471b9d5e699a3c6059667&query=' + city)
    .then(response => response.json())
}


export {
    fetchWeather
}