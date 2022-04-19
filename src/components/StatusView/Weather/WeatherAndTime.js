import React from 'react'
import '../StatusView.css'

const WeatherAndTime = () => {

    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
    const date = new Date();

    return (
        <div className='weatherAndTimeContainer'>
            <h1 className='weatherAndTimeText'>
                {dayOfWeek[date.getDay()] + ' ' + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
            </h1>
            <h2 className='weatherAndTimeText'>
                {date.getHours() + ":" + date.getMinutes()}
            </h2>
        </div>
    )
}

export default WeatherAndTime
