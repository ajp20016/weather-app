let Weather = {
        "apikey": "ceb2d06ab91755a6dea169217e27120e",
        fetchweather: function (city) {
                fetch("http://api.openweathermap.org/data/2.5/weather?q="
                        + city
                        + "&appid="
                        + this.apikey
                        + "&units=imperial"
                ).then((Response) => Response.json())
                        .then((data) => this.displayweather(data));
        },
        displayweather: function (data) {
                const { name } = data;
                const { icon, description } = data.weather[0];
                const { temp, humidity } = data.main;
                const { speed } = data.wind;
                console.log(name, icon, description, temp, humidity, speed)
                document.querySelector(".city").innerText = "weather in " + name;
                document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
                document.querySelector(".description").innerText = description;
                document.querySelector(".temp").innerText = temp + "°F";
                document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
                document.querySelector(".wind").innerText = "wind speed: " + speed + " mph/ ";
        },
        search: function (e) {
                this.fetchweather(document.querySelector(".search-bar").value);
                
        }
};

document.querySelector(".search-form").addEventListener("submit", function(e){
        e.preventDefault();
        e.stopPropagation();
        Weather.search();

})