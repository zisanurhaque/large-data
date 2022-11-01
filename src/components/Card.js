import React from 'react'

const Card = ({data}) => {
  return (
    <>
    
      <div className='card'>
        <h6>{data?.country}</h6>
        <h4>{data?.name}</h4>
        <a href={data?.web_pages[0]} target={"_blank"} rel={"noreferrer"}>{data?.web_pages[0]}</a>
      </div>
          
    </>
  )
}

export default Card
