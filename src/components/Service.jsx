import React from 'react'

const Service = () => {
  return (
    <main className="services" id="services">
      <h2>our <span className="text-secondary">services</span></h2>
      <div className="services-content">
        <div className="service-title">
          <i className="fa-solid fa-wallet"></i>
          <h3>saving money</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit.</p>
        </div>
        <div className="service-title">
          <i className="fa-solid fa-tree"></i>
          <h3>endless hiking</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit.</p>
        </div>
        <div className="service-title">
          <i className="fa-solid fa-socks"></i>
          <h3>amazing comfort</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit.</p>
        </div>
      </div>
    </main>

  )
};

export default Service;