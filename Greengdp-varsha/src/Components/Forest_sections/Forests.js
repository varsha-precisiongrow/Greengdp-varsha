import React, { useState, useEffect } from "react";
import "./Forests.css";
import CountUp from "react-countup";

import videoBg1 from "../../asset/vdo1.mp4";

const Forests = () => {
  const [counterStart, setCounterStart] = useState(0);
  const counterEnd = 100; // Adjust the end value of the counter
  const duration = 5; // Adjust the duration (in seconds) for the counter animation

  useEffect(() => {
    // Increment the counter automatically on mount
    const interval = setInterval(() => {
      if (counterStart < counterEnd) {
        setCounterStart((prevCount) => prevCount + 1);
      }
    }, 1000); // Increment every second

    return () => clearInterval(interval); // Clean up on unmount
  }, [counterStart, counterEnd]);

  return (
    <div className="video-background">
      <video src={videoBg1} autoPlay loop muted />
      <div className="dark-overlay"></div>
      <div className=" container-fluid ">
        <h1 style={{ textAlign: "center" }}>
            
          <div className="counter-div">
          <h2>Did You Know ?</h2>
            <div className="row my-4 offset-md-2">
              <div className="col-md-3 mx-2">
                <div>
                  <CountUp start={1} end={100} duration={4} />
                </div>
                <p className="para">companies are responsible for 71% of global emissions</p>

              </div>
              <div className="col-md-3 mx-2">
                <div>
                  <CountUp start={1} end={13} duration={4} />
                  <span>%</span>
                  </div>
                  <p className="para">of global greenhouse gas emissions are contributed from agriculture, forestry, and land use sectors</p>
              </div>
              <div className="col-md-3 mx-2">
                <div>
                  <CountUp start={1} end={37.4} duration={4} />
                  </div>
                  <p className="para">billion tonnes (Gt) of Global Greenhouse gases were released in 2023.</p>
              </div>
            </div>
            <h1>Change doesn’t just happen</h1>
            <h6 className="text-white">—it takes great leaders.</h6>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Forests;
