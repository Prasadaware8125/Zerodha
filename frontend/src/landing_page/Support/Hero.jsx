import React from 'react'

function Hero() {
  return (
    <section className='container-fluid' id='supportHero'>
      <div className="container">
        <div className="p-5 mt-5" id='supportWrapper'>
          <h4>Support Portal</h4>
          <a href="" className='text-white'>Track Tickets</a>
        </div>
        <div className="row p-2 ">
          <div className="col-6 p-3  mb-5">
            <h1 className='fs-3 mb-3'>Search for an answer or browse help topics to create a ticket </h1>
            <input style={{height:"4.5rem", width:"85%", borderRadius:"1rem", padding:"1rem", border:"none", marginBottom:"1rem"}} type="text" placeholder='Eg. how do i activate F&Q' /> <br />
            <a href="" style={{color:"white", textDecoration:"underline"}}>Track account opening</a>&nbsp;&nbsp; 
            <a href="" style={{color:"white", textDecoration:"underline"}}>Track segment activation</a>&nbsp;&nbsp; 
            <a href="" style={{color:"white", textDecoration:"underline"}}>Intraday margins</a>&nbsp;&nbsp; 
            <a href="" style={{color:"white", textDecoration:"underline"}}>Kite user manual</a>&nbsp;&nbsp; 
          </div>
          <div className="col-6 p-3 mb-5">
            <h1 className='fs-3 mb-5'>Featured </h1>
            <h4>1.&nbsp;
              <a href="" style={{color:"white", textDecoration:"underline"}}>Current Trkeover and Delisting - January 2024</a>
            </h4>
            <h4>2.&nbsp;
              <a href="" style={{color:"white", textDecoration:"underline"}}>Latest Intraday leverages - MIS & CO</a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero