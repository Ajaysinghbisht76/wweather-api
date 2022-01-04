import React,{useEffect,useState}from 'react'

export default function WeatherFive() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");


    useEffect(() => {
        const url = 'http://api.openweathermap.org/data/2.5/forecast?q='+search+'&appid=8e7f19d57fe271917c7c2deec37724a4';
        const fetchApi = async() => {
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson);



        };
        fetchApi();
    }, [search])

    return (
        <>
        <div color='black' >
             <input type="search" value={search} onChange={  (event)  => { setSearch(event.target.value) }}/>
            
            
    
    
    
        
    
    
    {!city.list[0].main ? (
  <p1>no data found </p1>
 ) :  (
    <div>
    
         <h1>today </h1>
     <h1 color='black'>{search}</h1>
      <h1 color='black'>{city.list[0].main.temp}</h1> 
      <h1 color='black'>{city.list[0].main.temp_max}</h1>
      <h1 color='black'>{city.list[0].main.temp_min}</h1>
 
      <h1 color='black'>{city.list[0].weather[0].main}</h1>
      
      
      <h1 color='black'>{city.list[0].main.humidity}</h1>
      <h1 color='black'>{city.list[0].sys.sunrise}</h1>
      <h1 color='black'>{city.list[0].sys.sunset}</h1>
     
      <h1 color='black'>geo coord{city.list[0].coord.lon}  {city.list[0].coord.lon}</h1>
   
      </div>
   
 )};


{!city.list[1].main ? (
  <p1>no data found </p1>
 ) :  (
    <div>
    
         <h1>today </h1>
     <h1 color='black'>{search}</h1>
      <h1 color='black'>{city.list[1].main.temp}</h1> 
      <h1 color='black'>{city.list[1].main.temp_max}</h1>
      <h1 color='black'>{city.list[1].main.temp_min}</h1>
 
      <h1 color='black'>{city.list[1].weather[0].main}</h1>
      
      
      <h1 color='black'>{city.list[1].main.humidity}</h1>
      <h1 color='black'>{city.list[1].sys.sunrise}</h1>
      <h1 color='black'>{city.list[1].sys.sunset}</h1>
     
      <h1 color='black'>geo coord{city.list[1].coord.lon}  {city.list[1].coord.lon}</h1>
   
      </div>
   
 )};

{!city.list[2].main ? (
  <p1>no data found </p1>
 ) :  (
    <div>
    
         <h1>today </h1>
     <h1 color='black'>{search}</h1>
      <h1 color='black'>{city.list[2].main.temp}</h1> 
      <h1 color='black'>{city.list[2].main.temp_max}</h1>
      <h1 color='black'>{city.list[2].main.temp_min}</h1>
 
      <h1 color='black'>{city.list[2].weather[0].main}</h1>
      
      
      <h1 color='black'>{city.list[2].main.humidity}</h1>
      <h1 color='black'>{city.list[2].sys.sunrise}</h1>
      <h1 color='black'>{city.list[2].sys.sunset}</h1>
     
      <h1 color='black'>geo coord{city.list[2].coord.lon}  {city.list[2].coord.lon}</h1>
   
      </div>
   
 )};

{!city.list[3].main ? (
  <p1>no data found </p1>
 ) :  (
    <div>
    
         <h1>today </h1>
     <h1 color='black'>{search}</h1>
      <h1 color='black'>{city.list[3].main.temp}</h1> 
      <h1 color='black'>{city.list[3].main.temp_max}</h1>
      <h1 color='black'>{city.list[3].main.temp_min}</h1>
 
      <h1 color='black'>{city.list[3].weather[0].main}</h1>
      
      
      <h1 color='black'>{city.list[3].main.humidity}</h1>
      <h1 color='black'>{city.list[3].sys.sunrise}</h1>
      <h1 color='black'>{city.list[3].sys.sunset}</h1>
     
      <h1 color='black'>geo coord{city.list[3].coord.lon}  {city.list[3].coord.lon}</h1>
   
      </div>
   
 )};

{!city.list[4].main ? (
  <p1>no data found </p1>
 ) :  (
    <div>
    
         <h1>today </h1>
     <h1 color='black'>{search}</h1>
      <h1 color='black'>{city.list[4].main.temp}</h1> 
      <h1 color='black'>{city.list[4].main.temp_max}</h1>
      <h1 color='black'>{city.list[4].main.temp_min}</h1>
 
      <h1 color='black'>{city.list[4].weather[0].main}</h1>
      
      
      <h1 color='black'>{city.list[4].main.humidity}</h1>
      <h1 color='black'>{city.list[4].sys.sunrise}</h1>
      <h1 color='black'>{city.list[4].sys.sunset}</h1>
     
      <h1 color='black'>geo coord{city.list[4].coord.lon}  {city.list[4].coord.lon}</h1>
   
      </div>
   
 )};
         </div></>
     )

  
}