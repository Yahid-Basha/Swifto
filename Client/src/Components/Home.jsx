import '../assets/Home.css'
import {Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = () => {

    return (
        <div>
        <div className="Home"> 
           <div className='Buttons'>
                <Link to="/RegistrationLanding">
                <button className="cssbuttons-io-button">
                Get started
                <div className="icon">
                    <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                    </svg>
                </div>
                </button>
                </Link>
                <Link to="/providers">
                <button className="cssbuttons-io-button">
             Our Providers
                <div className="icon">
                    <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                    ></path>
                    </svg>
                </div>
            </button>
            </Link>
            <Link to="/Login">
            <button className="cssbuttons-io-button">
            Access Account
            <div className="icon">
                <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                ></path>
                </svg>
            </div>
            </button>
            </Link>
           </div>


        <div className="main-container">
            <div className="service-provider-container"></div>
            <div className="customer-container"></div>
            <div className="name"><h2 className='swifto'>SWIFTO</h2>Transforming Breakdowns into Breakthroughs</div>
        </div>





        <div className='Top-sticks'>
            <div className="top-sticks-left swifto">SWIFTO</div>
            <div className="top-sticks-right">
                <div>
                <div className="hero-section">
                    <div className='Title'>
                        <h1>Welcome to AutoHelp</h1>
                        <h2>Your reliable partner in roadside vehicle assistance</h2>
                    </div>
                </div>
                <div className="info-section">
                    <div>
                        <h1>Why Choose Us?</h1>
                        <h2>Connect instantly with service centers and independent mechanics in case of a breakdown. Quick, reliable, and everywhere you go.</h2>
                    </div>
                </div>

                <div className="call-out-section">
                    <div>
                        <h1>Join Us</h1>
                        <h2>Sign Up Here for Swift Solutions<Link to="/RegistrationLanding"> Sign Up</Link></h2>
                    </div>
                </div>
                </div>
                
            </div>
            
        </div>


        <div className="service-section-card">
        <div className="service-section">
            <div>
                <h1>Our Services</h1>
                <h2>From manufacturer-authorized centers to certified local mechanics, choose the service that fits your need.</h2>
            </div>    
            <img src="https://source.unsplash.com/random/1920x1080/?car-service" alt="" />
        </div>
        </div>

        
        <div className="service-section-card">
        <div className="service-section">
            <div>
                <h1>Trusted Expertise</h1>
                <h2>At AutoHelp, we pride ourselves on a network of professional and experienced technicians. Whether it's a flat tire, an engine failure, or just routine maintenance, our partners have the know-how to get you back on the road safely and swiftly.</h2>
            </div>
            <img src="https://source.unsplash.com/random/1920x1080/?car-mechanic" alt="" />
        </div>
        </div>
        

        <div className="service-section-card">
        <div className="service-section">
            <div>
                <h1>24/7 Availability</h1>
                <h2>Day or night, rain or shine, AutoHelp is here for you. Our round-the-clock service ensures that no matter when trouble strikes, assistance is just a call away. Our goal is to minimize your downtime and maximize your peace of mind.</h2>
            </div>
            <img src="https://source.unsplash.com/random/1920x1080/?car-service" alt="" />   
        </div>
        </div>
        

        <div className="service-section-card">
        <div className="service-section">
            <div>
                <h1>Nationwide Coverage</h1>
                <h2>Travel with confidence knowing that AutoHelp covers you across the country. Our extensive network means you're never far from help. From urban cities to rural areas, we're there for you.</h2>
            </div>
            <img src="https://source.unsplash.com/random/1920x1080/?car-service" alt="" />   
        </div>
        </div>
        

        <div className="service-section-card">
        <div className="service-section">
            <div>
                <h1>Transparent Pricing</h1>
                <h2>Say goodbye to hidden fees and surprise charges. With AutoHelp, you'll receive a clear and upfront estimate before any work begins. We believe in transparency and fair pricing for all our services.</h2>
            </div>
            <img src="https://source.unsplash.com/random/1920x1080/?car-service" alt="" />   
        </div>
        </div>
        
        <div className="service-section-card">
        <div className="service-section">
            <div>
                <h1>Customer-Centric Approach</h1>
                <h2>Your satisfaction is our top priority. We listen to your needs and provide personalized services to ensure your expectations are not just met, but exceeded. Our dedicated customer support team is always ready to assist you with any inquiries.</h2>
            </div>
            <img src="https://source.unsplash.com/random/1920x1080/?car-service" alt="" />   
        </div>
        </div>
        

        <div className="service-section-card">
            <div className="service-section">
            <div>
                <h1>Easy Access Through Our App</h1>
                <h2>Download the AutoHelp app to access instant help with just a few taps. Track your service in real-time, manage your requests, and receive updates directly on your phone. It's roadside assistance made simple and efficient.</h2>
            </div>
            <img src="https://source.unsplash.com/random/1920x1080/?car-service" alt="" />    
            </div>
        </div>

        <div className="service-section-card">
            <div className="service-section">
            <div>
                <h1>Safety First</h1>
                <h2>Your safety is paramount. All our service providers follow strict safety protocols to ensure your vehicle is handled with the utmost care. In the time of COVID-19, we also ensure contactless service and hygiene compliance for your health and well-being.</h2>
            </div>
            <img src="https://source.unsplash.com/random/1920x1080/?car-service" alt="" />    
            </div>
        </div>



        </div>

        <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-info">
        <div>
          <p>123 Main Street, Cityville, Country</p>
          <p>Email: info@swifto.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div>
        <div>
          <p>&copy; 2024 Swifto. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>

    </div>
    );
}

export default Home;