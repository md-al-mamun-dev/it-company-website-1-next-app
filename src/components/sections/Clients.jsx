import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <div class="padding-block-500 text-center  ">
          <h2 class="fs-secondary-heading fw-bold text-center padding-block-700 text-shadow-accent-200">Who trust us</h2>
          <div class="container padding-block-700">
            <div class="flex services">

              <div class="service-item__card">
                <div class="client-icon">
                  {/* <img class="text-shadow-accent-200" src="./images/clients/Chittagong_City_Corporation_Logo.png"/> */}
                  <Image  class="text-shadow-accent-200"

                          src="/images/clients/Chittagong_City_Corporation_Logo.png"
                          // fill
                          width={200}
                          height={200}
                          layout="responsive"

                          object-fit="contain"
                          alt="Picture of the author"
                      />
                </div>
              </div>

              <div class="service-item__card">
                <div class="client-icon">
                  <Image  class="text-shadow-accent-200"
                      src="/images/clients/Bay-Developments-Logo-2023-Edition-Dark.png"
                      // fill
                      width={200}
                      height={200}
                      object-fit="contain"
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  {/* <img class="text-shadow-accent-200" src="/images/clients/Bay-Developments-Logo-2023-Edition-Dark.png"/> */}
                </div>
              </div>
              
              <div class="service-item__card">
                <div class="client-icon">
                <Image  class="text-shadow-accent-200"
                      src="/images/clients/estern-refinary-model-heigh-school.png"
                      // fill
                      width={200}
                      height={200}
                      object-fit="contain"
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  {/* <img class="text-shadow-accent-200" src="/images/clients/estern-refinary-model-heigh-school.png"/> */}
                </div>
              </div>
              <div class="service-item__card">
                <div class="client-icon ">
                  <Image  class="text-shadow-accent-200"
                      src="/images/clients/Khastagir Logo.png"
                      // fill
                      width={200}
                      height={200}
                      object-fit="contain"
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  {/* <img class="text-shadow-accent-200" src="/images/clients/Khastagir Logo.png"/> */}
                </div>
              </div>

              <div class="service-item__card">
                <div class="client-icon">
                  <Image  class="text-shadow-accent-200"
                      src="/images/clients/Collegiate School Ctg.png"
                      // fill
                      width={200}
                      height={200}
                      object-fit="contain"
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  {/* <img class="text-shadow-accent-200" src="/images/clients/Collegiate School Ctg.png"/> */}
                </div>
              </div>
              
              <div class="service-item__card">
                <div class="client-icon">
                  <Image  class="text-shadow-accent-200"
                      src="/images/clients/COCSOL.png"
                      // fill
                      width={200}
                      height={200}
                      object-fit="contain"
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  {/* <img class="text-shadow-accent-200" src="/images/clients/COCSOL.png"/> */}
                </div>
              </div>  
              
              <div class="service-item__card">
                <div class="client-icon">
                  <Image  class="text-shadow-accent-200"
                      src="/images/clients/Central College logo.png"
                      // fill
                      width={200}
                      height={200}
                      object-fit="contain"
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  {/* <img class="text-shadow-accent-200" src="/images/clients/Central College logo.png"/> */}
                </div>
              </div>
              
              <div class="service-item__card">
                <div class="client-icon">
                  <Image  class="text-shadow-accent-200"
                      src="/images/clients/Cumilla govt. City College.png"
                      // fill
                      width={200}
                      height={200}
                      object-fit="contain"
                      layout="responsive"
                      alt="Picture of the author"
                    />
                  {/* <img class="text-shadow-accent-200" src="/images/clients/Cumilla govt. City College.png"/> */}
                </div>
              </div>  

            </div>
          </div>
        </div>
  )
}

export default Clients