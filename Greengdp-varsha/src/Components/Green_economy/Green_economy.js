import React from 'react'
import './Green_economy.css';
import eco from '../../asset/eco.webp'
const Green_economy = () => {
  return (
    <div>
    <div className="eco-div py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="eco-img mx-auto">
                <img src={eco} className='w-100' alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
              <h1>Green Economy</h1>
              <p>The Green Economy in India emphasizes sustainable consumption and production, and resource efficiency, which are crucial for sustainable development.</p>
              <ul>
                <li>
                  <span>Sustainable Consumption and Production</span>: This focuses on improving how we produce and consume to use fewer resources, generate less waste, and emit fewer pollutants throughout the life cycle of products and processes.
                </li>
                <li>
                  <span>Resource Efficiency</span>: This means using resources in a way that delivers the most value while minimizing the amount needed and reducing emissions and waste per unit of product or service.
                </li>
              </ul>
              <p>Overall, the Green Economy is a long-term strategy for economic growth that prioritizes investments, job creation, and skills development with a focus on sustainability.
              </p>
           </div>
        </div>
      </div>
  
    </div>
    </div>
  )
}

export default Green_economy
