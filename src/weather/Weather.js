import React, { useState, useEffect } from 'react'
import './we.css';


const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");
    const [imgq, imge] = useState(null);



    useEffect(() => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + search + '&APPID=8e7f19d57fe271917c7c2deec37724a4';

        const fetchApi = async() => {
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.coord);
            setCity(resJson);
            const gg = resJson.weather[0].icon;

            imge('http://openweathermap.org/img/wn/' + gg + '@4x.png');
            console.log(imge);
        };
        fetchApi();
    }, [search])




    return ( <
        >
        <
        div className = 'to' >
        <
        input type = "search"
        value = { search }
        onChange = {
            (event) => { setSearch(event.target.value) } }
        />


        {
            city ? (


                <
                div >
                <
                h1 className = 'today' > Today weather { city.weather[0].main } < /h1> <
                h1 className = 'today'
                color = 'black' > { search } < /h1> <
                h1 className = 'today'
                color = 'black' > { city.main.temp } < /h1>  <
                h1 className = 'left'
                color = 'black' > { city.main.temp_max } < /h1> <
                h1 className = 'right'
                color = 'black' > { city.main.temp_min } < /h1>

                <
                img src = { imgq }
                alt = 'img' / >
                <
                h1 className = 'left'
                color = 'black' > { city.main.humidity } < /h1> <
                h1 className = 'right'
                color = 'black' > { city.sys.sunrise } < /h1> <
                h1 className = 'left'
                color = 'black' > { city.sys.sunset } < /h1>

                <
                h1 className = 'right'
                color = 'black' > geo coord { city.coord.lon } { city.coord.lat } < /h1>

                <
                /div>


            ) : (

                <
                p1 > no data found < /p1>
            )
        }; <
        /div></ >
    )
}


export default Weather;