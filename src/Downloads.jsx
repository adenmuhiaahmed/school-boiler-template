import React from "react";
import Nav from "./Nav";
import {
  CalendarCheck,
  Download,
  FileText,
  Receipt,
} from "react-bootstrap-icons";

function Downloads() {
  return (
    <div className="dcontainer">
      <div className="gtitle">
        <p className="title">Downloads</p>
        <p className="des ">
          Download essential school resources such as admission forms, fee
          structures, and official documents quickly and easily.
        </p>
      </div>
      <div className="downloadContent">
        <hr />
        <div className="dnlds">
          <div className="dcard">
            <div className="dimg">
              <FileText size={32} color="white" />
            </div>
            <h3>Admission Forms</h3>
            <p>
              For the 2026 intake download this forms, fill them and attach the
              necessary documents stated in the documents
            </p>
            <a href="">Download</a>
          </div>
          <div className="dcard">
            <div className="dimg">
              <Receipt size={32} color="white" />
            </div>
            <h3>Fee Structure</h3>
            <p>
              The document bellow is the official 2026 fee structure with the
              correct payment details. click download bellow to view.
            </p>
            <a href="">Download</a>
          </div>
          <div className="dcard">
            <div className="dimg">
              <CalendarCheck size={32} color="white" />
            </div>
            <h3>Academic Calendar</h3>
            <p>
              The official 2026 academic calendar is out. click bellow to
              download
            </p>
            <a href="">Download</a>
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

export default Downloads;
