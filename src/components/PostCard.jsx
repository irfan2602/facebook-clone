import React from 'react'
import './PostCard.css'

const PostCard = ({src,title,description}) => {
  return (
    <div className='card'>
        <img src={src} />
        <div className='card_info'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default PostCard