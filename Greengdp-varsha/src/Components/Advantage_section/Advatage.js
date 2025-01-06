import React from 'react'
import Title from '../Title_section/Title'
import './Advatage.css';
import universe from '../../asset/universe-p.png'
const Advatage = () => {
  return (
    <div>
      <Title
      title="Advantages of Green GDP"
      />
      <div className="conatiner-fixed ad-cont">
        <div className="modi-container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={universe} alt="" loading='lazy' />
                </div>
                <div className="col-lg-6 adv-info1">
                    <h2>Many researchers and countries support the Green GDP system for several reasons:</h2>
                    <ul>
                        <li><h3>Link Between Economy and Environment</h3></li>
                        <p>Green GDP is based on the idea that the economy and the environment are closely connected. Natural resources fuel economic growth, but excessive growth can deplete these resources. Therefore, it is crucial to actively manage this relationship. To do this, we need a way to measure and understand the link between the economy and the environment.</p>
                        <li><h3>Comparing Over Time and Across Countries</h3></li>
                        <p>Countries like China have noted that Green GDP can be used to track a country’s environmental health over time or compare it with other countries. By including data on resource depletion in GDP reports, analysts can more accurately predict how economic growth will impact future resources and sustainability.</p>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Advatage
