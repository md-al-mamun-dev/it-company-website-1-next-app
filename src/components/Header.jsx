import React from 'react'
import Image from 'next/image'
import phoneIcon from '../../public/icons/phone_icon.svg'
import companyLogo from '../../public/company_logo.png'


// import phoneIcon from '../public'


const Header = () => {
  return (
    <div class="primary-header">
    <div class="container"> 
      <div class="nav-wrapper">
        <a href="#">
          <Image 
              src={companyLogo}
              width={250}
              height={65}
              alt="Picture of the author"
          />

          </a>
        <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
          <span class="visually-hidden">Menu</span>
        </button>
        <nav class="primary-navigation" id="primary-navigation">
          <ul aria-label="Primary" role="list" class="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
        <div class="display-sm-none display-md-inline-flex contact-phone">
            <Image
              src={phoneIcon}
              width={30}
              height={30} />
            <h1>09678-221323</h1>          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header