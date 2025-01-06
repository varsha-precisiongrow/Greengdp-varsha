import React from 'react'
import './Title.css'
    const Title = ({ title}) => {
  return (
    <>
      <div className="w-imp">
        <h1
          className="tit-adv text-center"
        >
          {title}
        </h1>
      </div>
    </>
  )
}

export default Title
