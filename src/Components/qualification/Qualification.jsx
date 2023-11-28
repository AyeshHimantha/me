import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">What I offer</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button button--flex">
            <i className="uil uil-graduation-cap qualification_icon">{""}Education</i>
          </div>
          <div className="qualification_button button--flex">
            <i className="uil uil-briefcase-alt qualification_icon">{""}Experience</i>
          </div>
        </div>

        <div className="qualification_sections">
          
          <div className="qualification_content qualification_content-active">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">National Diploma in Technology (IT)</h3>
                <span className="qualification_subtitle">Institute of Tecnology University of Moratuwa</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2019-2022
                </div>
              </div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line/*"></span>
            </div>
          </div>

          <div className="qualification_content qualification_content-active">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Intern web developer</h3>
                <span className="qualification_subtitle">Univoft Solutions</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2021 September-2022 March
                </div>
              </div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Intern Web developer</h3>
                <span className="qualification_subtitle">Sterling BPO</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2022 April- 2022 October
                </div>
              </div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line/*"></span>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web developer</h3>
                <span className="qualification_subtitle">Sterling BPO</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2022 October - 2023 June
                </div>
              </div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line/*"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
