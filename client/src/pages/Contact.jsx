import React from 'react'

// Function to render the contact us page
const Contact = () => {
  return (
    <section className="contact-us">
      <section className="content">
        <section className="left-pane">
          <section className="address details">
            <i className=''></i>
            <section className="title">Address</section>
            <section className="text-one">Some street in the world, 2023</section>
            <section className="text-two">The world</section>
          </section>
          <section className="phone details">
            <i className=''></i>
            <section className="title">Phone</section>
            <section className="text-one">+254 9898 5647</section>
            <section className="text-two">+1 99 3434 5678</section>
          </section>
          <section className="email details">
            <i className=''></i>
            <section className="title">Email</section>
            <section className="text-one">coding@rabiul.legend.com</section>
            <section className="text-two">info@rabiul.legend.com</section>
          </section>
        </section>
        <section className="right-pane">
          <section className="title">
            <h4>Send us a message</h4>
          </section>
          <form action='#'>
            <section className='input-box'>
              <input type='text' placeholder='Enter your name'/>
            </section>
            <section className='input-box'>
              <input type='email' placeholder='Enter a valid email address'/>
            </section>
            <section className='input-box message'>
              <textarea className='' placeholder='Enter your message'></textarea>
            </section>
            <section className='button'>
              <button className=''>Send Now</button>
            </section>
          </form>
        </section>
      </section>
    </section>
  )
}

export default Contact