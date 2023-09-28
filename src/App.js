import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Component/AdminPanel/AdminPanel';
import ContactForm from './Component/ContactUs/ContactForm';
import Queries from './Component/ContactUs/Queries';
import ProjectUpload from './Component/Project/ProjectUpload';
import ProjectList from './Component/Project/ProjectList';
// import Test from './Component/Services/Test'; // Import the component you want to render in the Right-bar
import TestimonialForm from './Component/Form/TestimonialForm'
import Service from './Component/Services/Service';
function App() {
  const [auth, setAuth] = useState("USER");
  const [admin, setAdmin] = useState(false);
  const [status, setStatus] = useState(false);

  const authentication = (E) => {
    setAuth(E);
    if (E === "ADMIN") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  const statusUpdate = (e) => {
    setStatus(e);
  };

  return (
    <Router basename='/'>
      <>
        <NavBar authentication={authentication} admin={admin} statusUpdate={statusUpdate} status={status} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<div class="error">
            <img src={require('./Component/Resources/Images/error.png')} alt="Error" class="error-img" />
          </div>} />
          <Route path="/projects" element={<ProjectList />} />
          {admin && (
            <>
              <Route path="/admin-panel" element={<AdminPanel auth={auth} />} />
              <Route path="/query-panel" element={<Queries />} />
              <Route path="/project-add" element={<ProjectUpload />} />
            </>
          )}
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/services/*" element={<Service />} /> {/* Define a route for the Service component */}
          {status ? (
            <Route path="/testimonial" element={<TestimonialForm />} />
          ) : null}
        </Routes>
      </>
    </Router>
  );
}

export default App;
