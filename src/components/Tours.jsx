import React from 'react'

const Tours = () => {
  return (
    <article className="tours" id="tours">
      <h2>featured <span className="text-secondary">tours</span></h2>
      <div className="cards">
        {/* <!-- card X 4 --> */}
        <div className="card">
          <div className="card-img">
            <img src="./img/tours-1.jpg" alt="" />
            <p>Aug 21 2025</p>
          </div>
          <div className="card-content">
            <h3>tibet adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i className="fa-solid fa-map"></i>China</li>
              <li>6 Days</li>
              <li>From $2100</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="./img/tours-2.jpg" alt="" />
            <p>Aug 21 2025</p>
          </div>
          <div className="card-content">
            <h3>tibet adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i className="fa-solid fa-map"></i>China</li>
              <li>6 Days</li>
              <li>From $2100</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="./img/tours-3.jpeg" alt="" />
            <p>Aug 21 2025</p>
          </div>
          <div className="card-content">
            <h3>tibet adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i className="fa-solid fa-map"></i>China</li>
              <li>6 Days</li>
              <li>From $2100</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="./img/tours-4.jpeg" alt="" />
            <p>Aug 21 2025</p>
          </div>
          <div className="card-content">
            <h3>tibet adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i className="fa-solid fa-map"></i>China</li>
              <li>6 Days</li>
              <li>From $2100</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
};

export default Tours;