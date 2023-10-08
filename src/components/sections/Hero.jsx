import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div class="padding-block-900">
          <div class="container">
            <div class="even-columns">
              <div class="flow">
                <h1 class="fs-primary-heading fw-bold">
                  Your Automation Partner!
                </h1>
                <h2 class="fw-bold fs-600 font-uppercase">We provide quality service</h2>
                <p>It's our promise to you. We're here to simplify and enhance your automation journey. Let's work together to achieve efficiency, productivity, and success.</p>

              </div>
              <div class="hero__image">
                <Image 
                    src="/images/dummy_illustration.jpg"
                    fill
                    object-fit="contain"
                    alt="Picture of the author"
                />
                {/* background-image: url('images/bg-tablet-pattern.svg') */}
                {/* <img src="images/illustration-intro.jpg" alt=""> */}
              </div>
            </div>
          </div>
        </div>
  )
}

export default Hero