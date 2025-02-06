import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './resources/image1.jpg';
import image2 from './resources/image2.jpg';
import image3 from './resources/image3.jpg';

function HomePage() {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/loginPage")
  }

  return (
    <div>
      {/* Company Name */}
      <div className="bg-primary text-white text-center py-3">
        <h1>GAS NET</h1>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#safety-instructions">
                  Safety Instructions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faqs">
                  FAQs
                </a>
              </li>
              <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="btn btn-success text-white"
                  onClick={() => navigate("/subscription-success")}
                >
                  Subscribe Now
                </button>
              </li>
            </ul>
          </div>
              <li className="nav-item">
                <button
                  className="btn btn-primary text-white"
                  onClick={handleNavigate}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                  <button className="btn btn-warning text-white" onClick={() => navigate("/admin")}>
                  Admin Panel
                  </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
