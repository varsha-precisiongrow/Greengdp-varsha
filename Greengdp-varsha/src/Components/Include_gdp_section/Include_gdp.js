import React from 'react'
import './Include_gdp.css'

import bg from '../../asset/bg-lf.webp';
import ADV from '../../asset/ADV-BGw.webp'
const Include_gdp = () => {
  return (
    <div>
      <div className="container-fixed bg111">
        <div className="modi-container m-cont11">
            <div className="row mb-5">
                <div className="col-lg-6 col-12 text-dark">
                <h1 class="m-title">What Does Green GDP Include?</h1>
                    <ul>
                        <li><h6>The services given by the environment are included in the Green GDP. For example, if one geographical location has higher water quality than another, the residents in that region are likely to enjoy healthier and more productive lives.</h6>
                        </li>
                        <li><h6>The medical expenses linked with contaminated water or air have a tangible and measurable cost.</h6>
                        </li>
                        <li><h6>As a result, it is feasible to establish a baseline for the quality of natural resources present in an ecosystem and the savings they provide.</h6></li>
                        <li><h6>The most significant aspect of Green GDP is the depletion analysis.</h6></li>
                        <li><h6>This document outlines the process of natural resource depletion in an economy. It also explains whether or not the trend is sustainable.</h6></li>
                        <li><h6>This information is helpful for investors who make investments based on a country’s natural resources that can be used.</h6>
                        </li>
                        <li><h6>As a result, the depletion of natural resources would deter investors from maintaining an ecological equilibrium.</h6></li>
                        <li><h6>It should be remembered, however, that the depletion analysis is merely an informational document. It has no legal backing, and the participants can do anything.</h6></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12">
                    <div className='include-img mx-auto'>
                    <img src={bg} alt="inc-img" className='w-100'/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12 cont-order">
                    <div className='include-img mx-auto'>
                    <img src={ADV} alt="inc-img" className='w-100'/>
                    </div>
                </div>
                <div className="col-lg-6 col-12 text-dark cont-order2">
                <h1 class="m-title">What Does Green GDP Not Include?</h1>
                    <ul>
                        <li><h6>Excludes Non-Market Transactions: Does not account for the value of volunteer work and household labor</h6>
                        </li>
                        <li><h6>Fails to Capture Cultural and Social Values: Leaves out the intrinsic worth of heritage and community well-being.</h6>
                        </li>
                        <li><h6>Overlooks Short-Term Economic Gains: Focuses on long-term sustainability, often ignoring harmful short-term financial benefits.</h6></li>
                        <li><h6>Misses Informal Economy Activities: Frequently unaccounted for, potentially omitting significant economic activity.</h6></li>
                        <li><h6>Does Not Fully Address Broader Environmental Impacts: Lacks consideration of ecosystem service loss and climate change effects.</h6></li>
                        <li><h6>Ignores Equity Considerations: Does not inherently address issues of economic inequality or social justice.</h6>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Include_gdp
