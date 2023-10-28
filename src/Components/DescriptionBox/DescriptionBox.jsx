import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore, dignissimos ratione quibusdam repellat omnis, reprehenderit atque totam eveniet quos et vero distinctio iure quod corporis quis magni excepturi animi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque laudantium incidunt consequatur numquam, at cumque repudiandae quibusdam aliquam maxime quis pariatur provident sequi deleniti blanditiis? Excepturi amet pariatur voluptates!</p>
        </div>
    </div>
  )
}

export default DescriptionBox