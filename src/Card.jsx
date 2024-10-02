import React from 'react'

function Card(props) {
  return (
      <div className='bg-white flex flex-col items-center justify-between rounded-lg border-2 border-zinc-300 shadow-lg p-5 w-[20vw] h-[60vh]'>
          <div className='flex justify-center items-center h-screen'>
              
          <img className='w-[45%]' src={props.image} alt="" />
          </div>
          <div className='self-start w-full'>
              
          <div className='my-3'>
              
          <p className='self-start font-semibold'>{props.title}</p>
          <p className='self-start text-2xl font-semibold text-green-800'>${props.price}</p>
          </div>
          <button className='btn w-full bg-secondary text-secondary-content rounded-md'>Add to cart</button>
          </div>

    </div>
  )
}

export default Card
