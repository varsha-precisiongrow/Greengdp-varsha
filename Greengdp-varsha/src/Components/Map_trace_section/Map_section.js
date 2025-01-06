import React from 'react'
import './Map_section.css'
import worldmapp from '../../asset/worldmapp.png'
import  videoBg4 from "../../asset/grass.mp4";

const Map_section = () => {
  return (

    <div className="map-wrapper">
         <div className="video-section1">
         <video src={videoBg4} autoPlay loop muted/>
        </div>

    <div className="world-map">
        <marquee behavior="scroll" direction="left" scrollamount="10" >
          <div className="marquee-content">
          <h1><span>Countries Using</span> Green GDP</h1>
          </div>
        </marquee>
      <img src={worldmapp} alt="map"/>
      <div className="pin usa"></div>
      <div className="hover-content usa-hover"><span>USA</span> <br/> <p>The USA has developed detailed environmental-economic accounts to show the link between the economy and the environment, but it doesn't have a single Green GDP measurement.</p></div>

      <div className="pin france"></div>
      <div className="hover-content france-hover"><span>FRANCE</span> <br/>  <p>European Union countries must record data on emissions, taxes, materials, and environmental protection spending. This information helps calculate a green GDP or an adjusted domestic product.</p></div>

      <div className="pin sweden"></div>
      <div className="hover-content Sweden-hover"><span>SWEDEN</span> <br/> <p>Sweden is highly ranked in the Global Green Economy Index, which evaluates 130 countries on climate change, efficiency, markets, investment, and natural resources. Sweden also uses indicator dashboards to monitor green growth.</p></div>

      <div className="pin south-africa"></div>
      <div className="hover-content Africa-hover"><span>SOUTH AFRICA</span> <br/> <p>The USA has developed detailed environmental-economic accounts to show the link between the economy and the environment, but it doesn't have a single Green GDP measurement.</p></div>

      <div className="pin brazil"></div>
      <div className="hover-content Brazil-hover"><span>BRAZIL</span> <br/> <p>Efforts to calculate Green GDP in Brazil would likely focus on factors such as deforestation rates, biodiversity loss, carbon emissions, and the economic value of ecosystem services provided by the Amazon rainforest.</p></div>
      
      <div className="pin china"></div>
      <div className="hover-content China-hover"><span>CHINA </span><br/> <p>China planned to release Green GDP data in 2004 but stopped due to political and methodological challenges. An early report showed that accounting for environmental costs reduced their GDP growth figures.</p></div>

      <div className="pin australia"></div>
      <div className="hover-content Australia-hover"><span>AUSTRALIA</span> <br/> <p>The Australian government has implemented various policies and initiatives aimed at promoting environmental sustainability and green economic growth. These include measures to reduce greenhouse gas emissions, protect biodiversity, promote renewable energy, and improve resource efficiency.</p></div>

      <div className="pin india"></div>
      <div className="hover-content India-hover"><span>INDIA</span> <br/> <p>Although India doesn't officially track Green GDP, research estimates it to be around Rs 167 trillion in 2019. This is about 10% less than the traditional GDP of Rs 185.8 trillion for that year, according to a 2022 Reserve Bank of India paper.</p>
      </div>

  </div>
  </div>


  
  )
}

export default Map_section
