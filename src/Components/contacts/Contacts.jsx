import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.css'

const Contacts = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4a5yfnh', 'template_qjnr8jg', form.current, 'kL9XXCDuCyPxoxHdo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in Touch</h2>
        <span className="section_subtitle">Contact Me</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">himanthaayesh@gmail.com</span> <br />

                        <a href="" className="contact__button">Write me {""} <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Call or Whatsapp</h3>
                        <span className="contact__card-data">+94719102416</span> <br />

                        <a href="" className="contact__button">Write me {""} <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input type="text" name='name' className="contact__form-input" placeholder='Insert your Name' />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">E-mail</label>
                            <input type="email" name='email' className="contact__form-input" placeholder='Insert your Email' />
                        </div>

                        <div className="contact__form-div  contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder='Write me about your project'></textarea>
                        </div>

                        <button className="button button-flex">Send Message <i class="uil uil-telegram-alt hello-icon"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contacts
