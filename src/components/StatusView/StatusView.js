import './StatusView.css';
import WeatherAndTime from './Weather/WeatherAndTime'
import NewsArticle from './NewsArticles/NewsArticle'
import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useCookies} from "react-cookie";
import {Store} from "react-notifications-component";

const StatusView = () => {
    const [loading, setLoading] = useState(false)
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cookies] = useCookies(['currentUser']);

    /**Current defined alerts*/
    const [articles, setArticles] = useState([
        {
            key: 0,
            title: 'Article Title 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            key: 1,
            title: 'Article Title 2',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        },
        {
            key: 0,
            title: 'Article Title 3',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
    ])

    useEffect(() => {
        console.log("use-effect")
        window.scrollTo(0, 100)
        try {
            if (cookies.currentUser.privilege == null) {
                setIsLoggedIn(false)
            } else {
                setIsLoggedIn(true)
            }
        } catch (error) {
            setIsLoggedIn(false)
        }
        fetchArticles()

    }, [])
    const fetchArticles = async () => {
        setLoading(true)
        const newArtArray = []
        axios.get(serverUrl + 'api/loadnews').then(res => {
            res.data.forEach((element) => {
                newArtArray.push({
                    title: element.title,
                    text: element.newsText,
                    id: element.id,
                })
            })
            setArticles(newArtArray)
        })

        setLoading(false)
    }

    function deleteNews(newsId){
        console.log("deleting news-id " + newsId)
        axios.delete(serverUrl + 'api/news/delete', {
            data:{id: newsId}

        }).then((response) => {
            if (response.status === 200) {
                console.log("News delete success")
                fetchArticles()
            }
        }, (error) => {
            console.log("error " + error);
        });
    }

    /**Returns all the AlertBar elements from each current alert defined. */

    /**Returns all the NewsArticle elements from each article */
    const getArticles = () => {
        return (
            articles.map((article) =>
                isLoggedIn ? (
                    <div>
                        <NewsArticle article={article}/>
                        <button  onClick={()=> deleteNews(article.id)} type="button" className="btn btn-danger">Delete news</button>
                    </div>
                ) : <div>
                    <NewsArticle article={article}/>
                </div>
            )
        )
    }
    if (!loading) {

        return (
            <div className='alertView'>
                <WeatherAndTime/>

                <div className='articleRow'>
                    {getArticles()}
                </div>

            </div>
        )

    } else return (<p>loading</p>)

}

export default StatusView
