import '../Resources/StyleSheets/ChooseUs.css';

const data = [
  {
    iconClass: 'fas fa-clock',
    title: 'QUALITY / TIMELY COMPLETION',
    description: 'We are committed to delivering projects on time to ensure your satisfaction and convenience.',
    details: "We at Panchami Associates are dedicated to ensuring the quality and timely completion of construction projects. We understand that these two aspects are of paramount importance to our clients, and we take them seriously. Quality is the cornerstone of our approach. We believe that a well-constructed building not only stands the test of time but also provides comfort and functionality. To achieve this, we employ a team of highly skilled and experienced professionals who are committed to delivering excellence in every aspect of the construction process. Our stringent quality control measures ensure that materials and workmanship meet the highest industry standards. Timely completion is equally vital. We recognize that delays can be costly and inconvenient, which is why we emphasize efficient project management. Our project managers employ cutting-edge scheduling and monitoring tools to keep projects on track. We maintain open lines of communication with our clients, providing regular updates on progress and addressing any concerns promptly. At our construction firm, we believe that delivering projects on time and with uncompromising quality is not just a goal; it's our commitment. We understand that your construction project is an investment, and we are dedicated to maximizing its value by ensuring it is completed to the highest standards and within the agreed-upon timeline. Your satisfaction is our priority, and we look forward to helping you bring your construction vision to life, on time and with excellence."
  },
  {
    iconClass: 'fas fa-search-location',
    title: 'WE CAN ASSIST AND IDENTIFY SUITABLE PLOT',
    description: 'We believe in transparent pricing, and there are no hidden charges in our services.',
    details: "Selecting the ideal plot of land is the cornerstone of a successful construction project. It's a decision that can significantly impact your project's feasibility, cost, timeline, and overall success. At Panchami Associates, we understand the critical importance of providing a suitable plot for your construction needs. First and foremost, the location of your plot is paramount. Factors such as proximity to essential amenities, transportation hubs, and the target market should guide your decision. A strategically located plot can increase property value and marketability, ensuring a better return on investment. Additionally, we consider the topography and soil quality of the plot. The terrain and soil type can affect foundation design, excavation costs, and construction techniques. A comprehensive soil analysis and site assessment are crucial to understanding these aspects. Local zoning regulations and permits also play a pivotal role in plot selection. Ensuring that the chosen plot complies with zoning laws and obtaining the necessary permits can prevent costly delays and legal issues down the road. Lastly, environmental considerations are essential. We prioritize plots that are environmentally sustainable, minimizing the ecological impact of construction and adhering to green building practices. By meticulously evaluating these factors, we guarantee that the plot we provide aligns with your construction objectives, ensuring a smooth and successful project from start to finish. Your satisfaction is our commitment, and we're dedicated to delivering the perfect plot for your construction needs."
  },
  {
    iconClass: 'fas fa-wrench',
    title: 'SEAMLESS CONSTRUCTION MANAGEMENT',
    description: 'We stand by the quality of our work with a construction guarantee for your peace of mind.',
    details: "Construction management is a comprehensive approach to overseeing and controlling every aspect of a construction project from inception to completion. It plays a pivotal role in ensuring that your construction project is executed efficiently, on time, within budget, and to the desired quality standards. Firstly, construction management involves meticulous planning and scheduling. Experienced professionals assess project requirements, develop detailed plans, and create realistic timelines. This helps in allocating resources effectively, reducing delays, and managing costs. Secondly, it involves procurement and vendor management. Construction managers select and coordinate subcontractors, suppliers, and labor forces to ensure that they align with project objectives and meet quality standards. This involves tendering, negotiations, and contract administration. Furthermore, risk management is a crucial component. Construction managers anticipate potential issues, identify solutions, and implement strategies to mitigate risks. This proactive approach minimizes disruptions and financial setbacks. Additionally, quality control is integral to construction management. It involves regular inspections, testing, and adherence to industry standards to guarantee the end product meets your specifications. In essence, construction management is the backbone of a successful construction project, as it combines meticulous planning, resource allocation, risk mitigation, and quality assurance to deliver your project smoothly, on time, and within budget. By employing experienced construction managers, you can ensure the seamless execution of your vision."
  },
  {
    iconClass: 'fas fa-drafting-compass',
    title: 'CUSTOM DESIGN SOLUTIONS',
    description: 'We are committed to delivering projects on time to ensure your satisfaction and convenience.',
    details: `Expert Floor Plans: Our team of experienced architects and designers understands that the foundation of any successful construction project lies in meticulous planning. Our expert floor plans are meticulously crafted to meet your unique needs and specifications. We take into account your project's functionality, aesthetics, and budget to create floor plans that optimize space, flow, and efficiency. 3D Elevations: Visualizing your project in three dimensions is crucial for making informed decisions and securing stakeholder approval. Our 3D elevations bring your blueprints to life, allowing you to explore your project from every angle. Our cutting-edge technology and artistic flair combine to create stunning, realistic renderings that showcase the exterior design and architectural features in exquisite detail. This invaluable tool not only aids in design refinement but also helps clients and investors grasp the full potential and aesthetics of your construction project.`
  },
  {
    iconClass: 'fas fa-couch',
    title: 'Complete Interior Solutions for Your Dream Space',
    description: 'We specialize in providing comprehensive interior solutions that transform your space into a haven of functionality',
    details: "At Panchami Associates, we specialize in providing comprehensive interior solutions that transform your space into a haven of functionality and aesthetics. Our commitment to excellence and years of experience make us the ideal choice for all your interior needs. Our team of seasoned professionals understands that a well-designed interior not only enhances the beauty of your property but also improves its functionality. Whether it's a residential, commercial, or industrial project, we offer tailored solutions to meet your specific requirements. From concept to execution, we take care of every aspect of your interior project. Our services encompass interior design, space planning, lighting solutions, furniture selection, custom cabinetry, flooring, and more. We source high-quality materials and work with trusted suppliers to ensure durability and sustainability. We pride ourselves on our attention to detail and ability to bring your vision to life. Our skilled craftsmen and designers work closely with you, combining your ideas with their expertise to create spaces that exceed your expectations."
  },
  {
    iconClass: 'fas fa-compass',
    title: 'AS PER VASTHU PLANS',
    description: 'We stand by the quality of our work with a construction guarantee for your peace of mind.',
    details: "Vastu Shastra, often referred to simply as Vastu, is an ancient Indian architectural and design system that encompasses principles and guidelines for the layout, design, and orientation of buildings. It is believed to harmonize the energies of a space, ensuring the well-being and prosperity of its occupants. In the context of your construction website, 'According to Vastu' implies that your construction services adhere to the principles of Vastu Shastra. This means that your projects are designed and constructed in alignment with Vastu principles to create balanced and positive living or working environments. By emphasizing Vastu-compliant construction, we are offering our clients the potential for enhanced physical, mental, and spiritual well-being within their spaces. This can include factors like the placement of rooms, entrances, windows, and the use of natural elements in the construction process, all aimed at optimizing the flow of energy and promoting harmony. Embracing Vastu principles in your construction services demonstrates a commitment to holistic and culturally significant design, potentially appealing to clients who value these traditions and are seeking spaces that foster positivity and balance. It's a unique selling point that sets your construction projects apart, promoting not only structural integrity but also a sense of well-being for those who inhabit the spaces you create."
  },
];

function ChooseUs() {
  return (
    <div className='cont choose-us-section'>
      <div className='row choose-use-row'>
        <div className='col-lg-12 choose-us-title'>
          <h2>Why Choose Us</h2>
        </div>
      </div>
      <div className='gallery'>
        {data.map((item, index) => (
          <div key={index} className='gallery-item'>
            <div className='car-body'>
              <div className='feature-box'>
                <div className='feature-icon'>
                  <i className={item.iconClass}></i>
                </div>
                <h4 className='feature-title'>{item.title}</h4>
                <p className='feature-description'>{item.description}</p>
                <button
                  type="button"
                  className="btn btn-outline-dark mx-1"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${index}`} // Use a unique modal ID for each card
                >
                  Know More!
                </button>
                <div className="modal fade" id={`modal${index}`} tabIndex="5" aria-labelledby={`modal${index}_label`} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title fs-5" id={`modal${index}_label`}>{item.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p>{item.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseUs;
