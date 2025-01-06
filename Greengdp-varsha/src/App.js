import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import link
import Section from './Components/Section/Section';
import Forests from './Components/Forest_sections/Forests';
import Info_section from './Components/Modi_section/Info_section';
import Calcuator_info from './Components/Calculator_section/Calcuator_info';
import Map_section from './Components/Map_trace_section/Map_section';
import Imp_section from './Components/Imp_gdp_section/Imp_section';
import Advatage from './Components/Advantage_section/Advatage';
import Include_gdp from './Components/Include_gdp_section/Include_gdp';
import Navtabs from './Components/Nav_tabs/Navtabs';
import Diff_betwn from './Components/Diff_btwn/Diff_betwn';
import Green_economy from './Components/Green_economy/Green_economy';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <div>
              <Section />
            
              <Forests />
              <Info_section />
              <Calcuator_info />
              <Advatage />
              <Map_section />
              <Imp_section />
              <Include_gdp />
              <Navtabs />
              <Diff_betwn />
              <Green_economy />
              <Faq />
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </>
  );
};

export default App;
