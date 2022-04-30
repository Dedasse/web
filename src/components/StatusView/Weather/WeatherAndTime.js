import axios from 'axios'
import React from 'react'
import '../StatusView.css'
import { useState } from 'react'
import { useEffect } from 'react'

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat=60.1699&lon=24.9384&appid=aa596d63c25e354c1d157e8da71f0fd3'
})

const WeatherAndTime = () => {

    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    const date = new Date()

    const [weather, setWeather] = useState
    ({
        weather : [
        {
            id : 0,
            main : '',
            description : '',
            icon : '01d', //Default to clear skies icon
        }],
        main :
        {
            feels_like : 0,
            humidity : 0,
            temp : 0,
        },
    })

    useEffect(() => {
        api.get().then(res => {
            console.log(res.data)
            setWeather(res.data)
        })
    }, [])

    /**Converts the given value in Kelvin to Celsius and rounds it to the amount of given floating points. Rounds to 1 decimal point by default. */
    const kelvinToRoundedCelsius = (kelvin, floatingPoints = 1) =>
    {
        const floatingMultiplier = Math.pow(10, floatingPoints)
        return Math.round((kelvin - 273.15) * floatingMultiplier) / floatingMultiplier
    }

    return (
        <div className='weatherAndTimeContainer'>
            <h2 className='date'>
                {dayOfWeek[date.getDay()] + ' ' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()} {date.getHours() + ':' + date.getMinutes()}
            </h2>

            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>

            <h2 className='weatherParam1'>
                {weather.weather[0].main}
            </h2>
            
            <h3 className='weatherDescription'>
                {weather.weather[0].description}
            </h3>

            <h3 className='weatherTemp'>
                Temp: {kelvinToRoundedCelsius(weather.main.temp) /* Get Celsius into Kelvin */} °C
            </h3>

            <h3 className='weatherTemp2'>
                Feels Like: {kelvinToRoundedCelsius(weather.main.feels_like) /* Get Celsius into Kelvin */} °C
            </h3>
        </div>
        
    )
}

export default WeatherAndTime
