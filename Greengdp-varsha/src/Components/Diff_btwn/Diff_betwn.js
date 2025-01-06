import React from 'react'
import Title from '../Title_section/Title'
import './Diff_betwn.css'
const Diff_betwn = () => {
  return (
    <div>
      <Title
      title="Difference between Green GDP and GDP"
      />
      <div className="bg-cont-outer">
      <div className="timeline1">
    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
      <div className="timeline__event__icon ">
        <i className="fa-solid fa-seedling"></i> 
             <div className="timeline__event__date">
              Environmental Impact:
        </div>
      </div>
      <div className="timeline__event__content ">
        <div className="timeline__event__title">
         gdp
        </div>
        <div className="timeline__event__description">
          <p>Does not consider environmental degradation or resource depletion. It purely focuses on economic activity and growth.</p>
        </div>
        <div className="timeline__event__title">
          green gdp
         </div>
         <div className="timeline__event__description">
           <p>Incorporates the negative impacts of economic activities on the environment, aiming to reflect the true sustainability of growth.</p>
         </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
      <div className="timeline__event__icon">
        <i className="fa-solid fa-earth-americas"></i>
        <div className="timeline__event__date">
          Resource Depletion:
        </div>
      </div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">
          gdp
        </div>
        <div className="timeline__event__description">
          <p>Ignores the consumption and depletion of natural resources.</p>
        </div>
        <div className="timeline__event__title">
          green gdp
        </div>
        <div className="timeline__event__description">
          <p>Subtracts the economic costs associated with the depletion of natural resources, providing a more sustainable perspective on economic progress.</p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
      <div className="timeline__event__icon">
        <i className="fa-solid fa-seedling"></i>
              <div className="timeline__event__date">
                Pollution and Waste:
        </div>
      </div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">
          gdp
        </div>
        <div className="timeline__event__description">
          <p>Does not deduct the costs of pollution, waste, and other environmental damages.</p>
        </div>
        <div className="timeline__event__title">
          green gdp
        </div>
        <div className="timeline__event__description">
          <p>Deducts the economic value lost due to pollution and environmental damages, offering a more accurate picture of economic well-being.</p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp timeline__event--type1">
      <div className="timeline__event__icon">
        <i className="fa-solid fa-earth-americas"></i>
        <div className="timeline__event__date">
          Economic Indicators:
        </div>
      </div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">
          gdp
        </div>
        <div className="timeline__event__description">
          <p>Often used as a primary indicator of economic performance and growth.</p>
        </div>
        <div className="timeline__event__title">
         green gdp
        </div>
        <div className="timeline__event__description">
          <p> Used as an indicator to assess the sustainability and long-term viability of economic growth by considering environmental health.</p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
      <div className="timeline__event__icon">
        <i className="fa-solid fa-seedling"></i>
        <div className="timeline__event__date">
          Policy Implications:
        </div>
      </div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">
          gdp
        </div>
        <div className="timeline__event__description">
          <p>Can lead to policies focused solely on economic growth without considering environmental sustainability.</p>
        </div>
        <div className="timeline__event__title">
          green gdp
        </div>
        <div className="timeline__event__description">
          <p>Encourages policies that balance economic development with environmental preservation and resource conservation.</p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
      <div className="timeline__event__icon">
        <i className="fa-solid fa-earth-americas"></i>
              <div className="timeline__event__date">
                Public Perception:
        </div>
      </div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">
          gdp
        </div>
        <div className="timeline__event__description">
          <p>Widely recognized and understood as the standard measure of economic performance.</p>
        </div>
        <div className="timeline__event__title">
          green gdp
        </div>
        <div className="timeline__event__description">
          <p>Less commonly known but growing in importance as environmental concerns become more pressing.</p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp timeline__event--type1">
      <div className="timeline__event__icon">
        <i className="fa-solid fa-seedling"></i>
        <div className="timeline__event__date">
          Economic Measurement:
        </div>
      </div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">
          gdp
        </div>
        <div className="timeline__event__description">
          <p>Measures only the market value of goods and services produced.</p>
        </div>
        <div className="timeline__event__title">
         green gdp
        </div>
        <div className="timeline__event__description">
          <p>Adjusts the market value by accounting for environmental costs  to provide a more holistic view of economic progress.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="gdp-info">
    <p>Green GDP differs from regular GDP because it takes into account the environmental impact of economic growth. It starts with the usual GDP but adjusts it to reflect the costs of climate change, biodiversity loss, carbon emissions, and other environmental issues.
      <br/>
      Critics argue that it's hard to accurately measure these environmental impacts since things like ecosystem services don't have clear market prices. This means estimates can be speculative. However, supporters say that technology is improving these measurements over time and that even imperfect estimates of environmental costs are better than ignoring them completely in traditional GDP.
    </p>
  </div>
      </div>
    </div>
  )
}

export default Diff_betwn
