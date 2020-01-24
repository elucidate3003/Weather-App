const cityForm = document.querySelector('form');
const card = document.querySelector(".card")
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateCity = async city => {
   const cityDetail = await getCity(city);
  // console.log(cityDetail)
   const weather = await getWeather(cityDetail.Key);
   return {
    cityDetail,
    weather
   };
   
};

const updateGUI = data =>{
    const{cityDetail, weather} = data;
    console.log(weather);
    details.innerHTML = ` 
    <h3 class=my-3>${cityDetail.EnglishName}</h3>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-3">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>`

    timeSrc = '';
    if(weather.IsDayTime){
        timeSrc= "images/day1.jpg";
    }
    else{
        timeSrc="images/night1.gif";
    }
    time.setAttribute('src',timeSrc);

    iconSrc = `icons/icon/animated/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    if(card.classList.contains('d-none'))
        card.classList.remove('d-none');
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    // console.log(city)
    updateCity(city)
        .then(data=>updateGUI(data))
        .catch(err =>console.log(err));    
});