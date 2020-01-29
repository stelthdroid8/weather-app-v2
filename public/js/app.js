const weatherForm = document.getElementById('weatherForm');
const locationInput = document.getElementById('location-input');
const errorDisplay = document.getElementById('error-display');
const forecastDisplay = document.getElementById('forecast-display');
const locationDisplay = document.getElementById('location-display');

weatherForm.addEventListener('submit', event => {
  locationDisplay.innerHTML = 'Loading...';
  forecastDisplay.innerHTML = 'Loading...';
  errorDisplay.innerHTML = '';

  event.preventDefault();
  const loc = locationInput.value;
  fetch(`http://localhost:3000/weather?address=${loc}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        errorDisplay.innerHTML = data.error;
        forecastDisplay.innerHTML = '';
        locationDisplay.innerHTML = '';
      } else {
        locationDisplay.innerHTML = data.location;
        forecastDisplay.innerHTML = data.forecast;
      }
    });
  });
});
