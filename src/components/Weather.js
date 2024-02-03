import React,{useState} from "react";

const Weather=({data})=>{
 
    const[tem,setTem]=useState(0);
    const[temc,setTemc]=useState(0);
    setTem(Math.floor((data.data.main.temp - 273.15) * (9 / 5) + 32));
    setTemc((tem-32)*5/9);
    

    return(
        <div>
            {data.data&&(
                temc>20?

            <div class="red">
                <h1>temperature:{temc} F</h1>
               
                 <h1>conditions :{data.data.weather[0].description}</h1>
            </div>:<div class="blue">
                <h1>temperature:{temc} F</h1>
               
                 <h1>conditions :{data.data.weather[0].description}</h1>
            </div>
            )}
        </div>
    )



}

export default Weather;