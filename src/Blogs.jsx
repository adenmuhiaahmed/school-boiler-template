import React from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

function Blogs() {
  return (
    <div className="blogs">
      <div className="gtitle">
        <p className="title">Blogs</p>
        <p className="des ">
          Stories that inform, inspire, and connect our community. Dive into
          school life through our latest blog posts.
        </p>
      </div>
      <div className="Bbody">
        <div className="bpost">
          <div className="postimg f"></div>
          <div className="postdetails">
            <p className="postT">Tech Fair</p>
            <p className="postC">
              Join us for a vibrant explosion of color, rhythm, and tradition as
              Drumvale Senior School hosts its annual Cultural Day. This special
              event brings our diverse community together to showcase the rich
              tapestry of Kenyan heritage through traditional folk songs
            </p>
            <div className="bpostRow">
              <p>24th march 2026</p>
              <div className="d-flex">
                <Heart size={24} color="red" cursor={"pointer"} />
                <p>2 likes</p>
              </div>
              {/* <HeartFill size={24} color="red" /> */}
            </div>
          </div>
        </div>
        <div className="bpost">
          <div className="postimg th"></div>
          <div className="postdetails">
            <p className="postT">Cultural Day</p>
            <p className="postC">
              Join us for a vibrant explosion of color, rhythm, and tradition as
              Drumvale Senior School hosts its annual Cultural Day. This special
              event brings our diverse community together to showcase the rich
              tapestry of Kenyan heritage through traditional folk songs
            </p>
            <div className="bpostRow">
              <p>24th march 2026</p>
              <div className="d-flex">
                <Heart size={24} color="red" cursor={"pointer"} />
                <p>2 likes</p>
              </div>
              {/* <HeartFill size={24} color="red" /> */}
            </div>
          </div>
        </div>
        <div className="bpost">
          <div className="postimg fv"></div>
          <div className="postdetails">
            <p className="postT">Inter-classes Competition</p>
            <p className="postC">
              Join us for a vibrant explosion of color, rhythm, and tradition as
              Drumvale Senior School hosts its annual Cultural Day. This special
              event brings our diverse community together to showcase the rich
              tapestry of Kenyan heritage through traditional folk songs
            </p>
            <div className="bpostRow">
              <p>24th march 2026</p>
              <div className="d-flex">
                <Heart size={24} color="red" cursor={"pointer"} />
                <p>2 likes</p>
              </div>
              {/* <HeartFill size={24} color="red" /> */}
            </div>
          </div>
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

export default Blogs;
