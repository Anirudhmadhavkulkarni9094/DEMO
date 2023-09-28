import React from 'react';
import '../Resources/StyleSheets/Services.css';

import ResidentialConstruction from './ResidentialConstruction';
import InteriorDesigningProjects from './InteriorDesigningProjects';
import CommercialConstruction from './CommercialConstruction';
import BuildingExtensions from './BuildingExtensions';

const Service = () => {
  return (
    <div className="service">
      
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
