import React from 'react'
import Image from 'next/image'

const ProductItems = () => {
  return (
    <div class="padding-block-900">
          <h1 class="fs-primary-heading fw-bold text-center padding-bottom-500 product-details-title"> Manage your Educational Institute with </h1>
          <div class="padding-bottom-900 product-logo-container">
            <Image 
              src="/academy-logo.png"
              fill
              object-fit="cover"
            />
          </div>
          <div class="container">
            <div class="product-feature | flex flex-column-sm flex-row-md flex-gap-900  text-center-sm-only " >

              <div class="product-img-container">
                <Image class=" product-img product-img-l"
                      src="/images/dummy_illustration.jpg"
                      height={400}
                      width={400}
                      // fill
                      // object-fit="contain"
                      alt="Picture of the author"
                  />
              </div>

              <div class="product-details | flow">          
                <h2 class="fs-secondary-heading fw-bold ">Attendance</h2>
                <h2 class="fw-bold fs-600 font-uppercase">Our Software care's about you</h2>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
              </div>
              
            </div>
          </div>

          <div class="container ">
            <div class="product-feature | flex flex-column-sm flex-row-reverse-md flex-gap-900 text-center-sm-only" >
              <div class="product-img-container ">
                {/* <img class=" product-img product-img-r" src="images/illustration-intro.jpg" alt=""> */}
                <Image class=" product-img product-img-r"
                      src="/images/dummy_illustration.jpg"
                      height={400}
                      width={400}
                      // fill
                      // object-fit="contain"
                      alt="Picture of the author"
                  />
              </div>

              <div class="product-details | flow">
              <h2 class="fs-secondary-heading fw-bold ">Exam</h2>
                <h2 class="fw-bold fs-600 font-uppercase">Our Software care's about you</h2>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
                  view.</p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="product-feature | flex flex-column-sm flex-row-md flex-gap-900  text-center-sm-only " >
              <div class="product-img-container">
                {/* <img class="product-img product-img-l" src="images/illustration-intro.jpg" alt=""> */}
                <Image class=" product-img product-img-l"
                      src="/images/dummy_illustration.jpg"
                      height={400}
                      width={400}
                      // fill
                      // object-fit="contain"
                      alt="Picture of the author"
                  />
              </div>
              <div class="product-details | flow">          
                <h2 class="fs-secondary-heading fw-bold ">Student Account</h2>
                <h2 class="fw-bold fs-600 font-uppercase">Our Software care's about you</h2>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
              </div>
              
            </div>
          </div>

          <div class="container ">
            <div class="product-feature | flex flex-column-sm flex-row-reverse-md flex-gap-900 text-center-sm-only" >

              <div class="product-img-container ">
                {/* <img class=" product-img product-img-r" src="images/illustration-intro.jpg" alt=""> */}
                <Image class=" product-img product-img-r"
                      src="/images/dummy_illustration.jpg"
                      height={400}
                      width={400}
                      // fill
                      // object-fit="contain"
                      alt="Picture of the author"
                  />
              </div>


              <div class="product-details | flow">
              <h2 class="fs-secondary-heading fw-bold ">General Account</h2>

                <h2 class="fw-bold fs-600 font-uppercase">Our Software care's about you</h2>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
                  view.</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductItems