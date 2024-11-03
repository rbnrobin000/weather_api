const searchCity = document.querySelector('[search-city]');
const searchButton = document.querySelector('[search-button]');
const weatherImage = document.querySelector('[weather-img]');
const cityName = document.querySelector('[city-name]');
const temperature = document.querySelector('[temperature]');
const weatherStatus = document.querySelector('[weather-status]');

const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

function getData(city) {
    fetch(url + city + '&appid=66e84302616187f0c3fcab1392df03fa')
    .then(res => res.json())
    .then(data => {
        const gotCityName = cityName.innerText = data.name;
        const gotTemperature = temperature.innerText = Math.round(data.main.temp);
        const gotWeatherStatus = weatherStatus.innerText = data.weather[0].main;

        if(gotWeatherStatus === 'Clear') {
            weatherImage.src = 'images/clear.png';
        }
        else if(gotWeatherStatus === 'Clouds') {
            weatherImage.src = 'images/clouds.png';
        }
        else if(gotWeatherStatus === 'Drizzle') {
            weatherImage.src = 'images/drizzle.png';
        }
        else if(gotWeatherStatus === 'Mist') {
            weatherImage.src = 'images/mist.png';
        }
        else if(gotWeatherStatus === 'Rain') {
            weatherImage.src = 'images/rain.png';
        }
        else if(gotWeatherStatus === 'Snow') {
            weatherImage.src = 'images/snow.png';
        }
        else if(gotWeatherStatus === 'Haze') {
            weatherImage.src = 'images/haze.png';
        }
    })
}
// getData(city);

searchButton.addEventListener('click', () => {
    const city = searchCity.value;
    getData(city);
});