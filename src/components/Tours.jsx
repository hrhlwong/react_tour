import React from 'react'
import { tours } from '../data';
import Tour from './Tour';
import Title from './Title';

const Tours = () => {
  return (
    <article className="tours" id="tours">
      <Title title='featured' subtitle='tours'/>
      <div className="cards">
        {tours.map((tour)=>(
          <Tour key={tour.id} {...tour}/>
          // <Tour key={tour.id} image={tour.img} date={tour.date} title={tour.title} info={tour.info} location={tour.location} duration={tour.duration} const={tour.cost} />>
        ))}
      </div>
    </article>
  )
};

export default Tours;