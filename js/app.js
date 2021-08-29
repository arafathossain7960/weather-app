const apiKey ='5f4a653a211e2291b4756bc3f6d42462';

const loadData =()=>{
const searchText = document.getElementById('search-text');
const cityName = searchText.value ;

  const url = ` https://api.openweathermap.org/data/2.5/weather?q=${ cityName}&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
    .catch(err => console.log(err))
    searchText.value = '';

}

function displayWeather(data){
   const displayContain = document.getElementById('display-weather');
   displayContain.innerHTML = '';
   const temp = data.main;
   console.log(data.main)
   console.log(data.name)
   displayContain.innerHTML =`
   <h1>${data.name}</h1>
   <h3><span>Max_Temp : ${temp.temp_max}</span>  <span>Min Temp : ${temp.temp_min}</span>   </h3>
   
   
   `;
}
