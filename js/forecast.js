//const key = 'lO4N1pcFTwW0RA88TOTgsECzgHZoQ9jt';
const key = 'mRm9WTNGMmL3PZ1IhZ7Yz1fUFsa8mpXG'


const getWeather = async id =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return (data[0]);
}

const getCity = async (city) =>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0]; 
};

/* getCity("rome");
 getWeather("213490")
.then(data => console.log(data))
 .catch(err =>console.log(err));*/
