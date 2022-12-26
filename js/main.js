'use strict';

function getDayName(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

function getDayNum(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { month: 'short', day: 'numeric' });
}

// let dateStr = '2022-10-16';
// let day = getDayName(dateStr, "en-US");



let input = document.querySelector('input');
let findBtn = document.querySelector('.btn');
let city = document.querySelector('.location')
let avgTemp = document.querySelector('.avg-temp')
let currentDay = document.querySelector('.current-day')
let currentDate = document.querySelector('.current-date')
let condition = document.querySelector('.condition')
let conditionIcon = document.querySelector('.condition-container img')
let humidity = document.querySelector('.humidity')
let windSpeed = document.querySelector('.windSpeed')
let windDirection = document.querySelector('.windDirection')
let tomorrowDay = document.querySelector('.tomorrow-day')
let tomorrowIcon = document.querySelector('.tomorrowIcon')
let tomorrowCondition = document.querySelector('.tomorrowCondition')
let tomorrowTemp = document.querySelector('.tomorrowTemp')
let afterTomorrowDay = document.querySelector('.afterTomorrowDay')
let afterTomorrowIcon = document.querySelector('.afterTomorrowIcon')
let afterTomorrowCondition = document.querySelector('.afterTomorrowCondition')
let afterTomorrowTemp = document.querySelector('.afterTomorrowTemp')




findBtn.addEventListener('click', async function () {
    let apiResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b3021fa5e1354cd1a5890556221510&q=${input.value}&days=3`)
    let weatherApi = await apiResponse.json();
    let weatherLocation = weatherApi.location.name;
    city.innerHTML = weatherLocation;
    let temprature = weatherApi.current.temp_c
    avgTemp.innerHTML = `${temprature}°c`
    currentDay.innerHTML = getDayName(weatherApi.forecast.forecastday[0].date, 'en-US')
    currentDate.innerHTML = getDayNum(weatherApi.forecast.forecastday[0].date, 'en-US')
    condition.innerHTML = weatherApi.current.condition.text
    conditionIcon.setAttribute('src', weatherApi.current.condition.icon)
    humidity.innerHTML = weatherApi.current.humidity
    windSpeed.innerHTML = weatherApi.current.wind_kph
    windDirection.innerHTML = weatherApi.current.wind_dir
    tomorrowDay.innerHTML = getDayName(weatherApi.forecast.forecastday[1].date, 'en-US')
    tomorrowIcon.setAttribute('src', weatherApi.forecast.forecastday[1].day.condition.icon)
    tomorrowCondition.innerHTML = weatherApi.forecast.forecastday[1].day.condition.text
    tomorrowTemp.innerHTML = weatherApi.forecast.forecastday[1].day.avgtemp_c
    afterTomorrowDay.innerHTML = getDayName(weatherApi.forecast.forecastday[2].date, 'en-US')
    afterTomorrowIcon.setAttribute('src', weatherApi.forecast.forecastday[2].day.condition.icon)
    afterTomorrowCondition.innerHTML = weatherApi.forecast.forecastday[2].day.condition.text
    afterTomorrowTemp.innerHTML = weatherApi.forecast.forecastday[2].day.avgtemp_c

})


// document.querySelector('.row').style.display = 'none'








