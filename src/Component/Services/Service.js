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
          <li><Link to = "#res">Residential Construction</Link></li>
          <li><Link to = '#Cc'>Commercial Construction</Link></li>
          <li><Link to = '#Pro'>Interior Designing Projects</Link> </li>
          <li><Link to = '#Arch'>Building Extensions</Link></li>
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
