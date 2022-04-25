import './StatusView.css';
import AlertBar from './AlertBar'
import WeatherAndTime from './Weather/WeatherAndTime'
import NewsArticle from './NewsArticles/NewsArticle'
import { useState } from 'react'

const StatusView = () => {
  
    /**Current defined alerts*/
    const [alerts, setAlerts] = useState([
        {
            key: 0,
            title: 'Fire Drill Today',
            text: 'There is a scheduled fire drill that will take place today at 1:30pm.',
        },
        {
            key: 1,
            title: 'Extra Spicy',
            text: 'Today\'s meatballs in the cafeteria are spiced up, be careful!.',
        },
    ])

    const [articles, setArticles] = useState([
        {
            key: 0,
            title: 'Article Title 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            author: 'Simo Ketterä',
        },
        {
            key: 1,
            title: 'Article Title 2',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            author: 'Kati Jokinen',
        },
        {
            key: 0,
            title: 'Article Title 3',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            author: 'Juuso Virtanen',
        },
    ])

    /**Returns all the AlertBar elements from each current alert defined. */
    const getAlertBars = () => {
        return(
            alerts.map((alert) => (<AlertBar title={alert.title} text={alert.text} />))
        )
    }

    /**Returns all the NewsArticle elements from each article */
    const getArticles =() => {
        return(
            articles.map((article) => (<NewsArticle article={article}/>))
        )
    }

    return (
        <div className='alertView'>

            {getAlertBars()}

            <WeatherAndTime/>

            <div className='articleRow'>
                {getArticles()}
            </div>
            
        </div>
    )
}

export default StatusView
