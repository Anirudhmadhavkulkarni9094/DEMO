import React from 'react';
import '../Resources/StyleSheets/Services.css';
import { Link} from 'react-router-dom'; // Use Outlet for nested routing
import ResidentialConstruction from './ResidentialConstruction';
import InteriorDesigningProjects from './InteriorDesigningProjects';
import CommercialConstruction from './CommercialConstruction';
import BuildingExtensions from './BuildingExtensions';

const Service = () => {
  return (
    <div className="service">
      <div className='left-bar'>
        <ul className='service-list'>
          <li><a href = "#res">Residential Construction</a></li>
          <li><a href = '#Cc'>Commercial Construction</a></li>
          <li><a href = '#Pro'>Interior Designing Projects</a> </li>
          <li><a href = '#Arch'>Building Extensions</a></li>
        </ul>
      </div>
      <div className='Right-bar'>
        <div id='res'>

        <ResidentialConstruction/>
        </div>
        <div id='Cc'><CommercialConstruction/></div>
        <div id='Pro'>
        <InteriorDesigningProjects/>
        </div>
        
        <div id='Arch'>
        <BuildingExtensions/>
        </div>
      </div>
    </div>
  );
};

export default Service;