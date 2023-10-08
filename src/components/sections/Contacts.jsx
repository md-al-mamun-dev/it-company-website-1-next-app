import React from 'react'

const Contacts = () => {
  return (
    <div class="cta | margin-top-900 padding-block-900 bg-accent-400 text-neutral-100">
        <div class="container">
        <div class="even-columns vertical-align-center">
            <div>
            <p class="fs-primary-heading fw-bold text-shadow-accent-600">We will contact with you</p>
            </div>
            <div class="justify-self-end-md">
            {/* <form onSubmit={()=>{}} class="contact-us__form" > */}

            <form class="contact-us__form" >
            <input type="text" name="name" />
            <button class="button" data-type="inverted">send</button>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contacts