// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
    key:"d5139dcb1c2fffa746c4c7dfcf04e36a",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"

}


const serchInputBox = document.querySelector(".Input-box")
serchInputBox.addEventListener('keypress' , (event)=>{
    //keycode for enter button is 13
    if(event.keyCode === 13) {
        document.querySelector('.Weather-body').style.display='block';
        console.log(serchInputBox.value);
        getweatherReport(serchInputBox.value);
    }
})

// Get weather Report 
function getweatherReport(city){
fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
.then(weather => {
    return weather.json();
}).then(showWeatherReport);
}

function showWeatherReport (weather){
    console.log(weather)

    let city = document.getElementById('city');
    city.innerText=`${weather.name} ,${weather.sys.country}`;
    document.getElementById('temp').innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

let minMax = document.getElementById('min-max');
    minMax.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&degC (max)`;    

    let weatherType= document.getElementById('Weather');
    weatherType.innerText =`${weather.weather[0].main}`

    document.getElementById('date').innerText = dateDispaly(new Date());

    if(weatherType.textContent==='Cloud'){
        document.getElementById('type').style.backgroundImage="url('cloud.png')";
    }
    else if(weatherType.textContent==='Haze'){
        document.getElementById('type').style.backgroundImage="url('haze.png')";
    }
    else if(weatherType.textContent==='Clear'){
        document.getElementById('type').style.backgroundImage="url('clear.png')"
    }
    else if(weatherType.textContent==='Sunny'){
        document.getElementById('type').style.backgroundImage="url('sunny.jpg')";
    }
    else if(weatherType.textContent==='Thunderstorm'){
        document.getElementById('type').style.backgroundImage="url('thunderstorm.jpg')";
    }
    else if(weatherType.textContent==='Rain'){
        document.getElementById('type').style.backgroundImage="url('rain.png')";
    }
    else if(weatherType.textContent==='Snow'){
        document.getElementById('type').style.backgroundImage="url('snow.jpg')";
    }
    else{document.getElementById('type').style.backgroundImage="url('sunny.jpg')";}
}
function dateDispaly(newDAtwe){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday"];

    let months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = newDAtwe.getFullYear();
    let month = months[newDAtwe.getMonth()];
    let date = newDAtwe.getDate();
    let day= days[newDAtwe.getDay()];
    return `${date} ${month} (${day}), ${year}`;

}
