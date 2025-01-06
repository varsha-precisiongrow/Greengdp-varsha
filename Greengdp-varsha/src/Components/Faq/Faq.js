import React from 'react'
import './Faq.css'
import Title from '../Title_section/Title'
const Faq = () => {
  return (
    <div>
        <Title
        title="FAQ"
        />
      <div class="ttf mt-4">
 <div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="accordion" id="accordionExample">

        <div class="accordion-item">
          <h2 class="accordion-header">
             <button class="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span>01</span> What is Green GDP?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
             <p>Green GDP is a way of measuring economic growth that takes into account the environmental impact of economic activities.</p>
            </div>
          </div>
        </div>
              
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <span>02</span> How is Green GDP different from regular GDP?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Regular GDP only measures the total economic output of a country, while Green GDP considers the environmental costs and benefits associated with that output.
                    </div>
                  </div>
                </div>
               
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <span>03</span> Why is Green GDP important?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Green GDP is important because it helps us understand the true sustainability of economic growth. It shows whether economic activities are harming the environment and whether the wealth created can be maintained in the long term.
                    </div>
                  </div>
                </div>
               
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <span>04</span>What does Green GDP include?
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Green GDP includes factors like the value of natural resources, the cost of environmental degradation, and the benefits of conservation efforts.
                    </div>
                  </div>
                </div>
               
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <span>05</span>How does Green GDP benefit policymakers?
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Green GDP provides policymakers with a more comprehensive understanding of the relationship between economic development and environmental sustainability. It helps them make informed decisions to promote sustainable development.
                    </div>
                  </div>
                </div>

      </div>
    </div>
    <div class="col-md-6">
      <div class="accordion" id="accordionExample1">

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone1" aria-expanded="false" aria-controls="collapseone1">
              <span>06</span>How is Green GDP measured across different countries?
            </button>
          </h2>
          <div id="collapseone1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
            <div class="accordion-body">
            Green GDP measurement varies by country due to differing methodologies, data availability, and environmental priorities. Some countries may focus on specific pollutants, while others may include a broader range of environmental factors. International organizations are working to standardize these measurements for better comparison.
            </div>
          </div>
        </div>
               
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                      <span>07</span>Can Green GDP influence business practices?
                    </button>
                  </h2>
                  <div id="collapseTwo1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                    <div class="accordion-body">
                    Yes, Green GDP can influence business practices by highlighting the environmental costs associated with production. Companies may adopt more sustainable practices to improve their Green GDP contribution, respond to consumer demand for sustainability, and comply with regulations aimed at reducing environmental impact.
                    </div>
                  </div>
                </div>
              
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                      <span>08</span> What are some criticisms of Green GDP?
                    </button>
                  </h2>
                  <div id="collapseThree1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                    <div class="accordion-body">
                    Critics argue that Green GDP can oversimplify complex environmental issues and may not accurately reflect the true state of the economy or the environment. Additionally, the challenge of quantifying certain environmental costs can lead to inconsistencies and debates over the validity of the metrics used.
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                      <span>09</span>How does Green GDP relate to climate change initiatives?
                    </button>
                  </h2>
                  <div id="collapseFour1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                    <div class="accordion-body">
                    Green GDP is closely related to climate change initiatives as it emphasizes the economic implications of environmental degradation. By incorporating the costs of climate change into economic assessments, it can help drive policies aimed at reducing greenhouse gas emissions and promoting sustainable practices.
                    </div>
                  </div>
                </div>
              
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive1" aria-expanded="false" aria-controls="collapseFive1">
                      <span>10</span>Are there any countries that have successfully implemented Green GDP?
                    </button>
                  </h2>
                  <div id="collapseFive1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                    <div class="accordion-body">
                    Yes, some countries, such as China and Bhutan, have made strides in implementing Green GDP measures. Bhutan, for example, uses Gross National Happiness, which includes environmental health as a key component. China has also introduced measures to account for environmental costs in its economic planning.
                    </div>
                  </div>
                </div>
              

      </div>

    </div>
  </div>
 </div>
</div>
    </div>
  )
}

export default Faq
