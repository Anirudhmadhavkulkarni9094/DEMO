import React from 'react';
import '../Resources/StyleSheets/Home.css';
import welcomeImage from '../Resources/Images/e3.png';

function HomePage() {
 

  return (
    <div className='intro-page'>
      <div className='containers'>
        <div className='row intro-row'>
          <div className='col-lg-6 Intro'>
            <div className='WORDS'>
              <h4>Welcome to</h4>
              <h1> Panchami associates</h1>
              <p>Crafting the blueprint of excellence in civil construction</p>
            </div>
          </div>
          <div className='col-lg-6 Intro'>
            <img src={welcomeImage} className='Intro-img' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
