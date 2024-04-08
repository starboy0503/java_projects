
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '34824998a7mshaf30f1bfa417ebbp1cc559jsne48f5141e0e7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
cityName.innerHTML =city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then((response) => response.json())
    .then((response)=>{
		
		
		console.log(response)
		cloud_pct .innerHTML =response.cloud_pct
		temp.innerHTML =response.temp
		feels_like.innerHTML =response.feels_like
		humidity.innerHTML =response.humidity
		min_temp.innerHTML =response.min_temp
		max_temp.innerHTML =response.max_temp
		wind_speed.innerHTML =response.wind_speed
		wind_degrees.innerHTML =response.wind_degrees
		sunrise.innerHTML =response.sunrise
		sunset.innerHTML =response.sunset
   
	})
    .then(err=>(console.error(err)))
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")



const populateWeatherTable = (city, prefix) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then((response) => response.json())
        .then((response) => {
            document.getElementById(`${prefix}_cloud_pct`).innerHTML = response.cloud_pct;
            document.getElementById(`${prefix}_temp`).innerHTML = response.temp;
            document.getElementById(`${prefix}_feels_like`).innerHTML = response.feels_like;
            document.getElementById(`${prefix}_humidity`).innerHTML = response.humidity;
            document.getElementById(`${prefix}_min_temp`).innerHTML = response.min_temp;
            document.getElementById(`${prefix}_max_temp`).innerHTML = response.max_temp;
            document.getElementById(`${prefix}_wind_speed`).innerHTML = response.wind_speed;
            document.getElementById(`${prefix}_wind_degrees`).innerHTML = response.wind_degrees;
            document.getElementById(`${prefix}_sunrise`).innerHTML = response.sunrise;
            document.getElementById(`${prefix}_sunset`).innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
};

// Populate weather data for Shanghai
populateWeatherTable("Shanghai", "shanghai");
populateWeatherTable("Boston", "boston");
populateWeatherTable("Seattle", "seattle");
populateWeatherTable("Kolkata", "kolkata");
