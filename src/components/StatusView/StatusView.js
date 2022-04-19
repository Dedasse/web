import './StatusView.css';
import AlertBar from './AlertBar'
import WeatherAndTime from './Weather/WeatherAndTime'
import { useState } from 'react'

const StatusView = () => {
  
    /**Current defined alerts*/
    const [alerts] = useState([
        {
            title: 'Fire Drill Today',
            text: 'There is a scheduled fire drill that will take place today at 1:30pm.',
        },
        {
            title: 'Extra Spicy',
            text: 'Today\'s meatballs in the cafeteria are spiced up, be careful!.',
        },
    ])

    /**Returns all the AlertBar elements from each current alert defined. */
    const getAlertBars = () => {
        return(
            alerts.map((alert) => (<AlertBar title={alert.title} text={alert.text} />))
        )
    }

    return (
        <div className='alertView'>
            {getAlertBars()}
            <WeatherAndTime/>
        </div>
    )
}

export default StatusView
