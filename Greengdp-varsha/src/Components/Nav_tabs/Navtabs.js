import React, { useEffect } from 'react';
import { Tab } from 'bootstrap'; // Import only Tab from Bootstrap
import './Navtabs.css'
const Navtabs = () => {
    useEffect(() => {
        // Initialize Bootstrap tabs on component mount
        var tabs = document.querySelectorAll('.nav-tabs .nav-link');
        tabs.forEach(tab => {
            new Tab(tab);
        });
    }, []);

    return (
       <div className="container-fixed navv-bg">
         <div className='modi-container inner-nav'>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Importance of Green GDP</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Challenges of Green GDP</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
                    <ul>
                        <li><span className="gt">Overall View:</span> Green GDP takes into account environmental costs and benefits, providing a fuller picture of economic activities than traditional GDP.</li>
                        <li><span className="gt">True Value:</span> By assigning value to natural resources and ecosystem services, Green GDP shows the real impact of economic actions, helping people make better decisions.</li>
                        <li><span className="gt">Sustainable Growth:</span> Green GDP supports sustainable development by including environmental concerns in economic evaluations for a balanced approach.</li>
                        <li><span className="gt">Better Policies:</span> Policymakers get insights into the balance between growth and sustainability, leading to strategies that support both economic and environmental health.</li>
                        <li><span className="gt">Resource Management:</span> It highlights the depletion of resources and promotes sustainable practices, ensuring efficient use and conservation.</li>
                        <li><span className="gt">Targeted Actions:</span> Green GDP identifies areas with major environmental impacts, allowing for specific interventions and regulations to promote greener activities.</li>
                        <li><span className="gt">Accountability:</span> By considering environmental consequences, Green GDP holds businesses and other entities accountable for their ecological impact, encouraging responsible behavior.</li>
                        <li><span className="gt">Long-Term Focus:</span> It promotes long-term thinking by acknowledging the link between economic growth, environmental health, and social well-being.</li>
                        <li><span className="gt">Global Effort:</span> As environmental challenges increase, Green GDP supports a worldwide move towards sustainable and responsible growth practices.</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab">
                    <ul>
                        <li><span className="gt">Data Problems:</span> Calculating green GDP is tough because environmental and resource cost data are often unreliable. The estimates depend on assumptions, which can make them less reliable and harder to compare.</li>
                        <li><span className="gt">Valuation Disputes:</span> Deciding how much nature is worth in economic terms is controversial. Some aspects of nature have a value that isn't easily expressed in money, risking oversimplification.</li>
                        <li><span className="gt">Complex Combination:</span> Green GDP merges social, economic, and environmental factors, but there's no agreed method for doing this. Choosing the right indicators is difficult.</li>
                        <li><span className="gt">Policy Issues:</span> Although green GDP is useful, implementing it is challenging. It requires coordination, dealing with political issues, and balancing growth with environmental concerns. Universal policies are hard to create.</li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Navtabs;
