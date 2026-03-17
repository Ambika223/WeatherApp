const apikey="0ecf19278e867aedb6188dc043184c3b";
function getWeather(){
    const city=document.getElementById("cityInput").value;
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${apikey}&units=metric`;
     fetch(url).then(response => response.json()).then(data =>
     {
        document.getElementById("city").innerText=data.name;
        document.getElementById("temp").innerText="Temperature: " + data.main.temp +"\u00B0C";
        document.getElementById("description").innerText=data.weather[0].description;
        document.getElementById("humidity").innerText="Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").innerText ="wind Speed: " + data.wind.speed + "km/h";
        const iconCode = data.weather[0].icon;
        document.getElementById("icon").src=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        changeBackground(data.weather[0].main);
     });
}


function changeBackground(weather){
    if(weather == "Clear"){
        document.body.style.background="#f7b733";
    }
    else if(weather == "Clouds"){
        document.body.style.background ="#757f9a";
    }
    else if(weather == "Rain"){
        document.body.style.background ="#4b79a1";
    }
    else if(weather == "Snow"){
        document.body.style.background ="#83a4d4";
    }
    else{
        document.body.style.background = "linear-gradient(to right,#4facfe,#00f2fe)";
    }
}