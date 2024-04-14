import React from 'react'
import './FooterStyles.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="sb__footer section__padding">
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>For Business</h4>
            <a href="#">
              <p>Aakash R</p>
            </a>
            <a href="#">
              <p>Mohd Ayan Khan</p>
            </a>
            <a href="#">
              <p>Prashant Kumar</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Resources</h4>
            <a href="#">
              <p>Resources Center</p>
            </a>
            <a href="#">
              <p>Testimonials</p>
            </a>
            <a href="#">
              <p>STV</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Technologies Used</h4>
            <a href="#">
              <p>Spring Boot</p>
            </a>
            <a href="#">
              <p>React JS</p>
            </a>
            <a href="#">
              <p>MySQL Database</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href="#">
              <p>About</p>
            </a>
            <a href="#">
              <p>Career</p>
            </a>
            <a href="#">
              <p>Contact</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Coming soon on</h4>
            <div className='socialmedia'>
              {/* <p><img src={fb} alt=""/></p>
              <p><img src={twitter} alt=""/></p>
              <p><img src={linkedin} alt=""/></p>
              <p><img src={insta} alt=""/></p> */}
            </div>
          </div>
        </div>
        <hr/>
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} IRTBS. All rights reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/terms'><div><p>Privacy</p></div></a>
            <a href='/terms'><div><p>Security</p></div></a>
            <a href='/terms'><div><p>Cookie Declarations</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer