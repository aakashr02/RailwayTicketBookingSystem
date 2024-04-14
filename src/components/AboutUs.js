import React from 'react'
import './AboutUsStyles.css'

import aakash from "../images/Aakash.png"
import prashant from "../images/Prashant.png"
import ayan from "../images/Ayan.png"

function AboutUs() {
  return (
    <div className="about-us">
      <h1 style={{"text-align":"center"}}>About Us</h1><br/>
      <p>Welcome to the Railway Ticket Booking System! We're dedicated to simplifying your train travel experience, ensuring it's convenient, reliable, and enjoyable.</p>
      <br/>
      <h2>Our Mission</h2>
      <p>At Railway Ticket Booking System, our mission is to empower travelers by providing them with easy access to train tickets, ensuring smooth journeys, and creating unforgettable experiences. Our commitment to this mission is deeply rooted in our belief that train travel holds immense potential to enrich lives, broaden horizons, and foster meaningful connections.</p>
      <br />
      <h3>Easy Access to Train Tickets</h3>
      <p>We understand that the process of booking train tickets can sometimes be daunting and time-consuming. Therefore, our mission is to simplify this process, making it accessible to all. Through our user-friendly platform, travelers can effortlessly search, compare, and book tickets, eliminating barriers and frustrations often associated with traditional booking methods.</p>
      <br />
      <h3>Ensuring Smooth Journeys</h3>
      <p>A seamless journey begins long before boarding the train. From planning itineraries to navigating through stations, our mission is to ensure that every aspect of the travel experience is smooth and hassle-free. We provide comprehensive information on train schedules, routes, and amenities, empowering travelers to make informed decisions and embark on journeys with confidence.</p>
      <br />
      <h3>Creating Unforgettable Experiences</h3>
      <p>Beyond facilitating travel logistics, we strive to create memorable experiences that transcend the journey itself. Whether it's discovering scenic landscapes from the train window, immersing oneself in local culture during layovers, or forging connections with fellow travelers, our mission is to enrich every moment of the travel experience. Through curated recommendations, personalized services, and community engagement initiatives, we aim to transform ordinary trips into extraordinary adventures.</p>
      <br />
      <h3>Empowerment Through Travel</h3>
      <p>Travel has the power to inspire, educate, and transform individuals in profound ways. Therefore, our mission extends beyond facilitating transactions; it encompasses empowering travelers to embrace the transformative potential of their journeys. By providing access to diverse destinations, promoting sustainable travel practices, and fostering cultural exchange, we seek to empower travelers to broaden their perspectives, nurture their curiosity, and embrace the spirit of exploration.</p>
      <br />
      <p>In essence, our mission is not merely about booking tickets; it's about unlocking the transformative power of travel and empowering individuals to embark on journeys that enrich their lives and shape their stories. We are committed to realizing this mission every day, guided by our passion for travel, dedication to excellence, and unwavering commitment to our customers.</p>
      <hr />
      <h2>Why Choose Us?</h2><br/>
      <ul>
        <li>User-Friendly Interface: Our platform features an intuitive interface, making booking train tickets effortless and efficient.</li>
        <li>Extensive Network: With partnerships across various railway operators, we offer comprehensive coverage, ensuring you can reach your destination with ease.</li>
        <li>Competitive Pricing: We constantly monitor ticket prices to offer the most competitive rates, along with exclusive deals and discounts.</li>
        <li>24/7 Customer Support: Our dedicated support team is available round the clock to assist you with any queries or concerns.</li>
        <li>Secure Transactions: Your security is paramount. We employ advanced security measures to safeguard your personal and payment information.</li>
      </ul>
      <hr />
      <h2>Our Commitment to You</h2><br/>
      <ul>
        <li>Transparency: Providing transparent information about train schedules, ticket availability, and pricing.</li>
        <li>Reliability: Ensuring our platform is reliable and responsive, offering a seamless booking experience.</li>
        <li>Innovation: Continuously innovating to meet the evolving needs of our customers.</li>
        <li>Accessibility: Striving to make train travel accessible to everyone.</li>
      </ul><hr/>
      <h2>Our Team</h2>
      <div class="parent">
        <div class="card" style={{ "width": "18rem;" }}>
          <img className='about-img' src={aakash} alt="Avatar" />
          <div class="card-content">
            <h4>Aakash R</h4>

          </div>
        </div>

        <div class="card" style={{ "width": "18rem;" }}>
          <img className='about-img' src={ayan} alt="Avatar" />
          <div class="card-content">
            <h4>Mohd Ayan Khan</h4>

          </div>
        </div>

        <div class="card" style={{ "width": "18rem;" }}>
          <img className='about-img' src={prashant} alt="Avatar" />
          <div class="card-content">
            <h4>Prashant Kumar</h4>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUs