import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>
        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil sevices_icon"></i>
                    <h3 className="services_modal-title"></h3>
                </div>

                <div className="services_modal">
                    <div className="services_modal-content">

                        <h3 className="services_modal-title"></h3>
                        <p className="services_modal-description">
                        Since 2 years providing my service to clients and companies
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check services_modal-icon"></i>
                                <p className="services_modal-info">
                                I develop the UI/UX
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check services_modal-icon"></i>
                                <p className="services_modal-info">
                                I develop the front end
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check services_modal-icon"></i>
                                <p className="services_modal-info">
                                I develop Wordpress sites
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
