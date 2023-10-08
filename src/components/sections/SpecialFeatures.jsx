import React from 'react'

const SpecialFeatures = () => {
  return (
    <section class="padding-block-900 ">
          <div class="container">
            <div class="even-columns">
              <div class="sales-point__blog | flow text-center-sm-only" >
                <h2 class="fs-secondary-heading fw-bold">Why You Choose Us</h2>
                <p>We have highly skilled team with excellent technical knowledge and experience in software service. 
                  We create solutions that meet client's needs, withing sortest possible time, 
                  and also within a budget friendly package. We are proud to have more then hundreds of happy and satisfied clients.</p>
              </div>
              <div>
                <ul class="numbered-items | flow" role="list">
                  <li>
                  {/* <div class="flow" style={"--flow-spacer: 1em"}> */}

                    <div class="flow" >
                      <h3 class="numbered-items__title | fs-600 fw-bold">Expertise in Automation</h3>
                      <p class="numbered-items__body" data-width="wide">
                        Automate IT Limited specializes in automation solutions. They have a proven track record of streamlining processes, reducing manual work, and increasing efficiency through automation
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="flow">
                      <h3 class="numbered-items__title | fs-600 fw-bold">Cost Friendly Solutions</h3>
                      <p class="numbered-items__body" data-width="wide">Automation often leads to cost savings in the long run. By choosing Automate IT Limited, you may be able to reduce labor costs and minimize errors in your processes.</p>
                    </div>
                  </li>
                  <li>
                    <div class="flow">
                      <h3 class="numbered-items__title | fs-600 fw-bold">Customized Solutions</h3>
                      <p class="numbered-items__body" data-width="wide">They understand that every business is unique. Automate IT Limited can provide tailored automation solutions to fit your specific requirements and objectives.</p>
                    </div>
                  </li>

                  <li>
                    <div class="flow">
                      <h3 class="numbered-items__title | fs-600 fw-bold">Support and Maintenance</h3>
                      <p class="numbered-items__body" data-width="wide">Ongoing support and maintenance are critical for the success of automation initiatives. Automate IT Limited likely offers such services to keep your systems running smoothly.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SpecialFeatures