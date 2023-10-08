import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div class="padding-block-500 text-center  bg-accent-400 text-accent-100">
          <h2 class="fs-secondary-heading fw-bold text-center padding-block-700 text-shadow-accent-600">Our services</h2>
          <div class="container padding-block-700">
            <div class="flex services">

              <div class="service-item__card">
                <div class="service-icon text-shadow-accent-600">
                  <Image 
                      src="/icons/services/icon-school.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />
                </div>
                <h1 class="service-item-card__title text-shadow-accent-600">School Accesorries</h1>            
              </div>

              <div class="service-item__card">
                <div class="service-icon text-shadow-accent-600">
                  <Image 
                      src="/icons/services/web-service.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />
                </div>
                <h1 class="service-item-card__title text-shadow-accent-600">Website Development</h1>            
              </div>

              <div class="service-item__card">
                <div class="service-icon text-shadow-accent-600">
                  <Image 
                      src="/icons/services/soft-dev.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />
                </div>
                <h1 class="service-item-card__title text-shadow-accent-600">Software Development</h1>            
              </div>

              <div class="service-item__card">
                <div class="service-icon text-shadow-accent-600">
                  <Image 
                      src="/icons/services/mobile-dev.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />
                </div>
                <h1 class="service-item-card__title text-shadow-accent-600">Mobile App Development</h1>            
              </div>

              <div class="service-item__card">
                <div class="service-icon text-shadow-accent-600">
                  <Image 
                      src="/icons/services/erp.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />
                </div>
                <h1 class="service-item-card__title text-shadow-accent-600">enterprise resource planning (ERP)</h1>            
              </div> 
              <div class="service-item__card">
                <div class="service-icon text-shadow-accent-600">
                  <Image 
                      src="/icons/services/tech-brain.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />
                </div>
                <h1 class="service-item-card__title text-shadow-accent-600">IT consultancy</h1>            
              </div>
            </div>
          </div>
        </div>
  )
}

export default Services