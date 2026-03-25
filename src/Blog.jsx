import React from "react";
import { Heart, Facebook, Instagram, Tiktok } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="blogpage">
      <div className="blogC">
        <div className="author">
          <p className="desc">Author :</p>
          <div>
            <p className="Name">Mr Juma</p>
            <p className="role">role</p>
          </div>
        </div>
        <p className="titleBlog">CULTURAL WEEK</p>
        <p className="descBlog">
          {" "}
          Join us for a vibrant explosion of color, rhythm, and tradition as
          Drumvale Senior School hosts its annual Cultural Day. This special
          event brings our diverse community together to showcase the rich
          tapestry of Kenyan heritage through traditional folk songs
        </p>
        <div className="Blogimg"></div>
        <p className="detailed">
          The school’s Cultural Day was a vibrant celebration of diversity,
          unity, and creativity, bringing together students, teachers, and
          parents for a truly memorable experience. The campus came alive with
          color as students proudly dressed in traditional attire representing
          different communities, showcasing the rich cultural heritage found
          across the country and beyond. From the moment the event began, there
          was a sense of excitement and pride in the air, as each group prepared
          to share their unique traditions. The highlight of the day was the
          series of performances that captivated the audience. Students took to
          the stage with energetic dances, traditional songs, and dramatic
          presentations that told stories of history, identity, and community.
          Each performance was met with cheers and applause, reflecting the
          appreciation and respect for the different cultures represented. Food
          stalls added to the experience, offering a variety of local dishes
          that allowed everyone to taste and enjoy different cultural flavors.
          Beyond the entertainment, Cultural Day served as an important learning
          experience. It encouraged students to embrace diversity, fostered
          mutual respect, and strengthened the sense of belonging within the
          school. By the end of the day, it was clear that the event had not
          only celebrated culture but also brought the entire school community
          closer together, leaving lasting memories for everyone involved.
        </p>
        <hr />
        <div className="socials">
          <Facebook cursor={"pointer"} size={24} />
          <Instagram cursor={"pointer"} size={24} />
          <Tiktok cursor={"pointer"} size={24} />
        </div>
        <hr />
        <div className="bpostRow">
          <p>24th march 2026</p>
          <div className="d-flex">
            <Heart size={24} color="red" cursor={"pointer"} />
            <p>2 likes</p>
          </div>
        </div>
      </div>

      <div className="recents">
        <p>Recent Updates</p>
        <Link to={"/blogs"} className="viewAll">
          view all
        </Link>
      </div>

      <div className="recents">
        <div className="B">
          <div className="Bimage f"></div>
          <Link to={"/blog"} className="bLink">
            Tech fair
          </Link>
          <div className="bpostRow">
            <p>24th march 2026</p>
            <div className="d-flex">
              <Heart size={24} color="red" cursor={"pointer"} />
              <p>2 likes</p>
            </div>
          </div>
        </div>
        <div className="B">
          <div className="Bimage fv"></div>
          <Link to={"/blog"} className="bLink">
            Inter-classes Competition
          </Link>
          <div className="bpostRow">
            <p>24th march 2026</p>
            <div className="d-flex">
              <Heart size={24} color="red" cursor={"pointer"} />
              <p>2 likes</p>
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

export default Blog;
