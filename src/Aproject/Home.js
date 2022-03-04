import React from 'react'
export default function Home() {
  return (
    <>
      <section id='header' className=''>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='col-md-6 pt-lg-0 order-2 order-lg-1'>
                <h1>Grow your business with <strong className='brand-name'>SSISM</strong></h1>
                <h2 className='my-3'> We are the team of talented making websites</h2>
                <div className='mt-3'>
                  <a href='' className='btn-get-started'>Get Started</a>
                </div>
              </div>
              {/* <div className='col-lg-6 order-1 order-lg-2 header-img'>
                {/* <img src={} className='img-fluid animated' alt='img'/> */}
              {/* </div> */} 

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
