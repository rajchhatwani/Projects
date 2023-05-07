window.addEventListener('load', ()=>{
    let long;
    let lat;
    let locationIcon = document.querySelector('.weather-icon');
    let temperatureDescription = document.getElementById("temperature-description");
    let locationtimezone = document.getElementById("location-timezone");
    let temperatureDegree = document.getElementById("temperature-degree");
    // let iconpak = document.getElementById("icons");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e72af3db8718b2f8ac24a20852888400`;
            console.log(api)
            fetch(api)
            .then(Response =>{
                return Response.json();
            })
            .then(data =>{
                console.log(data);
                const {temp, feels_like} = data.main;
                const {country, sunrise} = data.sys;
                const timezone = data.timezone;
                const Sunrise = new Date();                
                const hi = data.weather[0].icon;
                const feel = feels_like-273.15;
                const a = temp-273.15;
                const b = parseFloat(a).toFixed(2);
                const feels = parseFloat(feel).toFixed(2);
                temperatureDegree.textContent = (`${b}\u00b0C`);
                temperatureDescription.textContent = (`It Feels like ${feels}\u00b0C`);
                locationtimezone.textContent =  Sunrise;
                locationIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${hi}@2x.png">`
                
                
            })
        })
        
    }
})