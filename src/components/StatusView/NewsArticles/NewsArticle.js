import React from 'react'
import '../StatusView.css'

const NewsArticle = ({article}) => {
  return (
     <div className='newArticle'>
      <h1 className='articleTitle'>
          {article.title}
      </h1>
      <h2 className='article'>
        {article.author}
      </h2>
      <p className='article'>
        {article.text}
      </p>

      <p className='article'>
          {article.key}
      </p>
    </div>
    
  )
}

export default NewsArticle
