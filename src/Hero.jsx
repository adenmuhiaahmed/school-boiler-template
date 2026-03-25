import React from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCarousel from "./MyCarousel";
import { Link } from "react-router-dom";
import { Heart, Facebook, Instagram, Tiktok } from "react-bootstrap-icons";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroC">
          <div className="heroImg"></div>
          <h1>DRUMVALE SENIOR SCHOOL</h1>
          <p>
            Empowering young minds for a brighter tomorrow. Excellence, growth,
            and opportunities await at Drumvale.
          </p>
          <div className="btns">
            <a href="#about" className="aboutBtn">
              About Us
            </a>
            <Link to={"/downloads"} className="intakeBtn">
              Join Us
            </Link>
          </div>
          <div className="arrowdown">
            <span></span>
          </div>
        </div>
      </div>
      <div id="about">
        <h1 className="section-title">About Us</h1>
        <p className="desc">
          Drumvale nurtures young minds for a brighter future. We focus on
          learning, growth, and holistic development.
        </p>
        <div className="facilities">
          <div className="facility tro">
            <h3>Achievments</h3>
            <p>
              Celebrating excellence and remarkable milestones. Drumvale
              continues to shine in academics and beyond.
            </p>
          </div>
          <div className="facility cLab">
            <h3>Computer Labs</h3>
            <p>
              The school is well equiped with enough computers for Stem students
            </p>
          </div>
          <div className="facility sLab">
            <h3>Science Labs</h3>
            <p>
              Hands-on learning in state-of-the-art labs. Exploring science,
              innovation, and discovery every day.{" "}
            </p>
          </div>
          <div className="facility cRoom">
            <h3>Determined students</h3>
            <p>
              Driven minds, passionate hearts, unstoppable spirit. Our students
              aim high and achieve higher.{" "}
            </p>
          </div>
          <div className="facility wRoom">
            <h3>Proper Sanitation</h3>
            <p>
              Clean, safe, and healthy learning spaces. A school where wellbeing
              comes first.{" "}
            </p>
          </div>
          <div className="facility sports">
            <h3>Sports</h3>
            <p>
              Fueling teamwork, discipline, and athletic excellence. Every game
              is a lesson in dedication and fun.{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="principals">
        <h1 className="section-title">Our Core Principals</h1>

        <div className="contPri">
          <div className="priCard">
            <div className="badgee motto"></div>
            <div className="badgeDesc">
              <h2>Motto</h2>
              <p>Excellence is our commitment</p>
            </div>
          </div>
          <div className="priCard">
            <div className="badgee vission"></div>
            <div className="badgeDesc">
              <h2>Vission</h2>
              <p>To empower all students to achieve their full potential</p>
            </div>
          </div>
          <div className="priCard">
            <div className="badgee mission"></div>
            <div className="badgeDesc">
              <h2>Mission</h2>
              <p>
                To provide quality educational service That inspires all
                students to realize their Aspirations;
              </p>
            </div>
          </div>
          <div className="priCard">
            <div className="badgee values"></div>
            <div className="badgeDesc">
              <h2>Values</h2>
              <p>Godliness Self-discipline Fairness Commitment Hardwork</p>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials">
        <h1 className="section-title">Testimonials</h1>
        <p className="desc">
          Our students, management, and teachers share their experiences.
          Discover why Drumvale is a place of trust and excellence.
        </p>
        <div className="cards">
          <div className="card">
            <div className="img dean"></div>
            <p className="Name">Mrs Njogu</p>
            <p className="role">Dean</p>
            <p className="quote">
              “ We focus on delivering quality, student-centered learning. Every
              learner is equipped with skills for academic success. ”
            </p>
          </div>
          <div className="card">
            <div className="img prinsi"></div>
            <p className="Name">Mr Mbugua</p>
            <p className="role">Principle</p>
            <p className="quote">
              “ We focus on delivering quality, student-centered learning. Every
              learner is equipped with skills for academic success. ”
            </p>
          </div>
          <div className="card">
            <div className="img stu"></div>
            <p className="Name">Joice</p>
            <p className="role">Head girl</p>
            <p className="quote">
              “ We focus on delivering quality, student-centered learning. Every
              learner is equipped with skills for academic success. ”
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div id="updates">
        <div className="section-title">Latest Updates</div>
        <p className="desc">
          Stay informed about school events, achievements, and news. Never miss
          an important moment at Drumvale.
        </p>
        <br />
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
      </div>
      <br />
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
    </>
  );
}

export default Hero;
