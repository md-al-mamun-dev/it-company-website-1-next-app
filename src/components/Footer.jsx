import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div class="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
        <div class="container">
          <div class="primary-footer__wrapper">
              <a class="primary-footer__logo" href="#" aria-label="home">
                {/* <img class="company-logo" src="images/Automate IT Limited Final Logo with Bangla.png" alt="Manage"> */}
                <Image 
                  class="company-logo"
                  src="/company_logo.png"
                  fill
                  objectFit='contain'
                  // width={250}
                  // height={65}
                  alt="Picture of the author"
              />
              </a>

              <ul class="social-list" role="list" aria-label="Social links">
                <li>
                  <a aria-label="facebook" href="#">
                    <Image  src="/icons/fb_icon.svg"
                            width={25}
                            height={25}
                            alt="facebook-icon" />
                  </a>
                </li>

                <li><a aria-label="youtube" href="#">
                  <Image  src="/icons/youtube_icon.svg"
                          width={25}
                          height={25}
                          alt="Picture of the author" />
                  </a>
                </li>

                <li>
                  <a aria-label="linkedin" href="#">
                    <Image  src="/icons/linkedin_icon.svg"
                            width={25}
                            height={25}
                            alt="Picture of the author" />
                  </a>
                </li>
              </ul>


            <div class="primary-footer__nav-wrapper">
              <nav class="footer-nav">
                <ul class="flow" aria-label="Footer" role="list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </nav>
            </div>

            <div class="primary-footer__physical-address">
              <p>373, D I T Road, East Rampura, Dhaka-1219</p>
            </div>
            <div class="primary-footer__mail-address">
              <p>info@automate.com.bd</p>
            </div>
            <div class="primary-footer__copyright">
              <p>Copyright 2020. All Rights Reserved</p>
            </div> 


    
          </div>
        </div>
      </div>
  )
}

export default Footer