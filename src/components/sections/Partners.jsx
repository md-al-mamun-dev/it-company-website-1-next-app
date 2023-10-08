import React from 'react'
import Image from 'next/image'

const Partners = () => {
  return (
    <section class="padding-block-500 text-center  bg-accent-400">
          <h2 class="fs-secondary-heading fw-bold text-center padding-block-700 text-shadow-accent-200">Our Partners</h2>
          <div class="container padding-block-700">
            <div class="flex services">

              <div class="service-item__card">
                <div class="service-icon ">
                <Image 
                      src="/images/clients/sonali_bank_limited.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />

                </div>
              </div>

              <div class="service-item__card">
                <div class="service-icon">
                <Image 
                      src="/images/clients/metronet-logo.svg"
                      fill
                      object-fit="contain"
                      alt="Picture of the author"
                  />
                </div>
              </div>
              
              <div class="service-item__card">
                <div class="service-icon">
                  <Image 
                        src="/images/clients/mobishaastra.svg"
                        fill
                        object-fit="contain"
                        alt="Picture of the author"
                    />
                </div>
              </div>

              <div class="service-item__card">
                <div class="service-icon">
                  <Image 
                        src="/images/clients/shurjoPay.svg"
                        fill
                        object-fit="contain"
                        alt="Picture of the author"
                    />
                </div>
              </div>

            </div>
          </div>
        </section>
  )
}

export default Partners