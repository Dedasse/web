import React from 'react'
import '../StatusView.css'

const NewsArticle = ({article}) => {
  return (
    <div className='weatherAndTimeContainer'>
      <h1 className='weatherAndTimeText'>
          {article.title}
      </h1>
      <h2 className='weatherAndTimeText'>
        {article.author}
      </h2>
      <p className='weatherAndTimeText'>
        {article.text}
      </p>

      <p className='weatherAndTimeText'>
          {article.key}
      </p>
    </div>
  )
}

export default NewsArticle
