import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudShowersHeavy } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Weather(){


    const [apiData, setApiData] = useState(null);
    const [inputData, setInputData] = useState("Chennai");

useEffect(()=>{
    var data= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=ea813e194b90e9a52ecd1b5d47c6b9f6`);
    var api = data.then((item)=>item.json());
     api.then((value)=> setApiData(value));
},[inputData]);

let submittingForm=(event)=>{
    console.dir(event.target[0].value)
    setInputData(event.target[0].value);
    event.preventDefault();
}

console.log(apiData);

    return(
        <>
        <main>
            <div className="card">
                <h1>
                    Weather Card
                </h1>
                <form className="in" onSubmit={(e)=>submittingForm(e)}><input type="text"/> <button type="submit" className="i"><TiWeatherPartlySunny  /></button> </form><br/>
                <h1>{apiData?.name}</h1>
              <p className="size"><FaCloudShowersHeavy className="icon" /> {apiData?.weather[0].main} </p>
        
             
              <div className="display">  
                <div>
                    <p className="humid">Humidity</p>
                    <WiHumidity className="icon" />
                    {apiData?.main.humidity}
                </div>
                <div>
                    <p>WindSpeed</p>
                    <FaWind className="icon" />
                    {apiData?.wind.speed}
                </div>
              </div>
            </div>
        </main>
        </>
    )
}