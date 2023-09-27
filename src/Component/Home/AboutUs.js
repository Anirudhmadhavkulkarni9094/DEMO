import React from 'react';
import '../Resources/StyleSheets/About_us.css'; // Import your CSS file for styling

const AboutUs = () => {
  // Function to open the modal
  

  return (
    <div className='about-us'>
      <div className='p-5'>
        <div className='row'>
          <div className='col-lg-6 img'>
            <img src={require('../Resources/Images/Home-About.png')} alt='About Us' className='about-us-img' />
          </div>
          <div className='col-lg-6 about-us-content'>
            <h2>About Us</h2>
            <p>
              Unique Solutions For Residentials & Industries! To realize this vision, our workforce and associates strive
              to achieve excellence in every aspect of development to enhance the quality of living for our customers. We have
              a well-experienced and professional team with deep and flexible knowledge in interior designing services.
              We provide the most innovative Home interior, Office interior, and Commercial interior designs.
            </p>
            <ul>
              <li>Ontime services</li>
              <li>24/7 hours services</li>
              <li>Verified professionals</li>
            </ul>
            <button type="button" className="btn btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#AboutUse">
              About Use
            </button>
          </div>
        </div>
      </div>
      
            <div className="modal fade" id="AboutUse" tabIndex="-1" aria-labelledby="AboutUseLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="AboutUseLabel">About us</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  At Panchami Associates, we pride ourselves on our commitment to excellence, quality craftsmanship, and unparalleled customer service. With 32+ years of experience in the industry, we have successfully completed numerous projects ranging from residential buildings to commercial complexes on turnkey basis.
Our company is comprised of a highly skilled and dedicated team of professionals, including architects, engineers, project managers, and skilled civil laborers. We bring together our collective expertise and innovative solutions to ensure the successful completion of every project we undertake.
What sets us apart is our unwavering focus on client satisfaction. We understand that each project is unique, and we tailor our services to meet the specific requirements and goals of our clients. From project planning and design to construction and post-construction support, we strive to exceed expectations at every stage.

                  </div>
                </div>
              </div>
            </div>
      
    </div>
  );
};

export default AboutUs;
