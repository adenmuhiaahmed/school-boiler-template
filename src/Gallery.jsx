import React from "react";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gtitle">
        <p className="title">Our Gallery</p>
        <p className="des ">
          A visual journey of learning, growth, and success. Experience the life
          of our school through every photo.
        </p>
      </div>
      <div className="gbody">
        <div className="gcard">
          <div className="gimage o"></div>
          <p>Learning in action: Bright minds, big dreams.</p>
          {/* <button>View</button> */}
        </div>
        <div className="gcard">
          <div className="gimage t"></div>
          <p>Leadership with confidence and grace.</p>
          {/* <button>View</button> */}
        </div>
        <div className="gcard">
          <div className="gimage th"></div>
          <p>Celebrating tradition, talent, and togetherness.</p>
          {/* <button>View</button> */}
        </div>
        <div className="gcard">
          <div className="gimage f"></div>
          <p>Innovation and curiosity take center stage</p>
          {/* <button>View</button> */}
        </div>
        <div className="gcard">
          <div className="gimage fv"></div>
          <p>Passion, teamwork, and the thrill of the game.</p>
          {/* <button>View</button> */}
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

export default Gallery;
