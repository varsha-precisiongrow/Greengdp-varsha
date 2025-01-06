import React, { useState } from 'react';
import './Calcuator_info.css';

const Calcuator_info = () => {
  const [result, setResult] = useState("0");

  const handleClick = (text) => {
    switch (text) {
      case "AC":
        setResult("0");
        break;
      case "CE":
        setResult(prevResult => {
          if (prevResult.length === 1 || prevResult === "0") {
            return "0";
          } else {
            return prevResult.substring(0, prevResult.length - 1);
          }
        });
        break;
      case "=":
        try {
          let calculatedResult = eval(result.replaceAll("x", "*").replaceAll("÷", "/"));
          setResult(Number(calculatedResult.toFixed(3)).toString()); // Limit to 3 decimal places
        } catch (error) {
          setResult("Invalid");
        }
        break;
      default:
        if (result === "0") {
          setResult(text);
        } else {
          setResult(prevResult => prevResult + text);
        }
        break;
    }
  };

  return (
    <div className="container-fixed bg-image-cal">
      <div className="modi-container cal-section">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <h1 className="m-title">How is Green GDP Calculated?</h1>
            <p>The green GDP takes into account the impact of environmental and social factors when calculating economic growth. The formula is:</p>
            <h3 class="formula">Green GDP = GDP – Environmental Costs – Social Costs</h3>
            <h6>Here's what it includes:</h6>
            <h3>Environmental costs:</h3>
            <ul>
              <li>The value lost from using up natural resources like oil, coal, natural gas, metals, and wood.</li>
              <li>The cost of damage to ecosystems, such as polluted groundwater and eroded topsoil.</li>
              <li>The expense of restoring resources, like recycling waste and planting new forests.</li>
            </ul>
            <h3>Social costs:</h3>
            <ul>
              <li>The increase in poverty is caused by the depletion of resources.</li>
              <li>The additional healthcare expenses result from environmental damage.</li>
            </ul>
            <h6>This method can also be applied to net domestic product (NDP), which factors in the depreciation of capital used in the GDP.</h6>
          </div>
          <div className="col-lg-5 col-md-12 mycal">
            <div id="calculator">
              <div id="panel-top">
                <div id="screen">
                  <div id="result">{result}</div>
                </div>
              </div>
              <div id="panel-bottom">
                <div id="buttons">
                  <div className="row">
                    <div className="button red" onClick={() => handleClick("AC")}>AC</div>
                    <div className="button red" onClick={() => handleClick("CE")}>CE</div>
                    <div className="button" onClick={() => handleClick("%")}>%</div>
                    <div className="button" onClick={() => handleClick("÷")}>÷</div>
                  </div>
                  <div className="row">
                    <div className="button" onClick={() => handleClick("7")}>7</div>
                    <div className="button" onClick={() => handleClick("8")}>8</div>
                    <div className="button" onClick={() => handleClick("9")}>9</div>
                    <div className="button" onClick={() => handleClick("x")}>x</div>
                  </div>
                  <div className="row">
                    <div className="button" onClick={() => handleClick("4")}>4</div>
                    <div className="button" onClick={() => handleClick("5")}>5</div>
                    <div className="button" onClick={() => handleClick("6")}>6</div>
                    <div className="button" onClick={() => handleClick("-")}>-</div>
                  </div>
                  <div className="row">
                    <div className="button" onClick={() => handleClick("1")}>1</div>
                    <div className="button" onClick={() => handleClick("2")}>2</div>
                    <div className="button" onClick={() => handleClick("3")}>3</div>
                  </div>
                  <div className="row">
                    <div className="button" onClick={() => handleClick("0")}>0</div>
                    <div className="button" onClick={() => handleClick(".")}>.</div>
                    <div className="button" onClick={() => handleClick("=")}>=</div>
                    <div className="button plus mt-3" onClick={() => handleClick("+")}>+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calcuator_info;
