
const search=document.querySelector(".btn")
const error=document.getElementById("error")
const imgcontainer=document.getElementById("imgcontainer")
const third=document.getElementById("third")
const container=document.getElementById("container")
const description=document.getElementById("description")


search.addEventListener("click",()=>

   {
      var city=document.getElementById("inputdata").value
      const apikey='7a0caa07e63920b9eb3b27cbdfb4a799';
      
      if(city=='')
          return;
         
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
      .then(response => response.json()).then(json=>
      {


      if (json.cod =='404')
      {
         container.style.height='400px';
         error.classList.add('active');
         imgcontainer.classList.remove('active');
         third.classList.remove('active');
         return;
      }
    else
        {
         container.style.height='525px';
         error.classList.remove('active');
         imgcontainer.classList.add('active');
         third.classList.add('active');
        }



     const image=document.querySelector(".imgcontainer img");
     const humidity=document.getElementById("humidity");
     const speed=document.getElementById("speed");
     const temparature=document.getElementById("tem");
     


     switch (json.weather[0].main)
     {
        case 'Clear':
            image.src='fullysun.jpeg'
            break;
         case 'Rain':
            image.src='rain.jpeg'
            break;
         case 'Snow':
            image.src='clody.jpeg'
            break;
         case 'Clouds':
            image.src='sunny.jpeg'
            break;
         case 'Mist':
            image.src='mist.jpeg'
            break;
         case 'Haze':
            image.src='mist.jpeg'
            break;

        default:
            image.src='sunny.jpeg'
     }

    temparature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`
    humidity.innerHTML=`${json.main.humidity}%`
    speed.innerHTML=`${parseInt(json.wind.speed)} km/h`
    description.innerHTML=`${json.weather[0].description}`
   });
});