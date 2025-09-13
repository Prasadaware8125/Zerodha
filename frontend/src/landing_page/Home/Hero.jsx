import React from 'react'

function Hero() {
  return (
    <div>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img src='media/images/homeHero.png' alt="Hero Image" className='mb-2' />
          <h1 className='mt-2'>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
          <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"25%", margin:"0 auto"}}>Signup now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero