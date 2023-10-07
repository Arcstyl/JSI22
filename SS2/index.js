let search = document.getElementById("search")
let place = document.getElementById("place")
let temp = document.getElementById("temp")
let condition = document.getElementById("condition")

let searchbutton = document.getElementById("searchbutton")

let img = document.getElementById("conditionimg")

let main = document.querySelector(".main")

searchbutton.addEventListener("click", function(){
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search.value}`)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        // console.log(data.results[1].longitude);
        // console.log(data.results[1].latitude);
                let longitude = data.results[0].longitude
                let latitude = data.results[0].latitude

                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)

                .then(function(response){
                    return response.json()
                })

                .then(function(data_weather){
                    console.log(data_weather);

                    console.log(data_weather.current_weather.temperature);

                    let time = data_weather.current_weather.time

                    let currenttime = time.split("T")

                    let string = ""

                    if (data_weather.current_weather.is_day == 0){
                        string = currenttime[1] + " PM"
                    } else if (data_weather.current_weather.is_day == 1){
                        string = currenttime[1] + " AM"
                    }

                    temp.innerHTML = data_weather.current_weather.temperature + "°"
                    place.innerHTML = data.results[0].name + " // " + data.results[0].country
                    if (data_weather.current_weather.weathercode <= 3){
                        condition.innerHTML = "Sunny // Local time: " + string

                        img.src = "http://openweathermap.org/img/wn/01d@2x.png"
                        main.style.backgroundImage = "url(https://media4.giphy.com/media/0Styincf6K2tvfjb5Q/200w.gif?cid=6c09b952otqv6vu04iddsg5cp6nbpycqb7xen837889zwm2s&ep=v1_gifs_search&rid=200w.gif&ct=g)" 

                    } else if (data_weather.current_weather.weathercode >= 45 && data_weather.current_weather.weathercode <= 77){
                        condition.innerHTML = "Raining // Local time: " + string

                        img.src = "http://openweathermap.org/img/wn/10n@2x.png"
                        main.style.backgroundImage = "url(https://i.gifer.com/origin/29/290b383afb7c810c0635b6662ea8660d_w200.gif)" 

                    } else if (data_weather.current_weather.weathercode > 77 && data_weather.current_weather.weathercode <= 99){
                        condition.innerHTML = "Thunderstorms // Local time: " + string

                        img.src = "http://openweathermap.org/img/wn/11d@2x.png"
                        main.style.backgroundImage = "url(https://i.gifer.com/N8i8.gif)" 

                    }
                })
    });
})
