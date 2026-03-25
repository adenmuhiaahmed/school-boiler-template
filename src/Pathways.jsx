import React from "react";

function Pathways() {
  return (
    <div className="pathways">
      <div className="gtitle">
        <p className="title">Pathways</p>
        <p className="des ">
          Explore the Competency-Based Curriculum pathways shaping every
          learner’s future. Choose from Arts, Sciences, or Technical fields
          based on strengths and passion.
        </p>
      </div>
      <div className="pbody">
        <div className="pathrow">
          <div className="pathText">
            <p className="pathTitle">
              Science, Technology, Engineering, and Mathematics (STEM)
            </p>
            <p className="pathDesc">
              Targets technical and scientific innovation through pathways in
              pure sciences, applied sciences, and technical studies like
              engineering and ICT. This route is for those aspiring to careers
              in medicine, data science, and modern technology.
            </p>
          </div>
          <div className="pathImg stem"></div>
        </div>
        <hr />
        <div className="pathrow">
          <div className="pathImg hist"></div>
          <div className="pathText">
            <p className="pathTitle">Social Sciences</p>
            <p className="pathDesc">
              Designed for students interested in human society, culture, and
              governance, preparing them for roles in law, journalism, and
              public administration. It emphasizes subjects like history,
              geography, languages, and community service.
            </p>
          </div>
        </div>
        <hr />
        <div className="pathrow">
          <div className="pathText">
            <p className="pathTitle">Arts and Sports Science</p>
            <p className="pathDesc">
              Focuses on developing creative talents and physical skills for
              careers in the performing arts, design, and professional
              athletics. It includes specialized learning in music, theatre,
              fine arts, and sports-related disciplines.
            </p>
          </div>
          <div className="pathImg art"></div>
        </div>
      </div>
      <div id="contact">
        <h1 className="section-title">Get in Touch</h1>
        <div className="rowc">
          <div className="linksc">
            <h3 className="section-title">Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Intake</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Pathways</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h3 className="section-title">ADDRESS</h3>
            <p className="desc">P.O BOX 99-00520 Ruai, </p>
            <h3 className="section-title">PHONE</h3>
            <p className="desc">+254704 921291 </p>
            <h3 className="section-title">EMAIL</h3>
            <p className="desc">info@drumvale secondaryschool.co.ke </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pathways;
