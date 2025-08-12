import React from 'react'
import Title from './Title';

const Service = () => {
  return (
    <main className="services" id="services">
      <Title title='our' subtitle='services'/>
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

// const Service = ({ icon, title, info }) => {
//   return (
//     <div className='service-title'>
//       <i className={icon}></i>
//       <h3>{title}</h3>
//       <p>{info}</p>
//     </div>
//   );
// };

export default Service;