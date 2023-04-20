import React from "react";
import "../Style/Footer.css";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import {RxCross1 } from "react-icons/rx";
import { HiLocationMarker } from "react-icons/hi";

import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
import { Dialog, DialogContent, DialogTitle, Modal } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ height: "68px", width: "68px" }}
            />
            <p className="content">
              Eservz is a leading and globally renowned e-commerce and Amazon
              specialist agency.
            </p>
          </div>
          <div className="col">
            <h3>Quick Link</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Services</h3>
            <HashLink
              to="#digitalMedia"
              smooth
              style={{ textDecoration: "none" }}
            >
              <p className="services">Digital Media</p>
            </HashLink>
            <HashLink to="#analytics" smooth style={{ textDecoration: "none" }}>
              <p className="services">Analytics</p>
            </HashLink>
            <HashLink
              to="#customerExperience"
              smooth
              style={{ textDecoration: "none" }}
            >
              <p className="services">Customer Experience</p>
            </HashLink>
          </div>
          <div className="col">
            <h3>Address</h3>
            <p className="address">
              <span style={{ marginRight: "4px", cursor: "pointer" }}>
                {" "}
                <HiLocationMarker
                  size={18}
                  color="#rgb(37, 47, 62)"
                  onClick={() => setOpen(true)}
                />
              </span>
              Bighatch Consulting Private Limited 88/1, H.K.D.Compound, G.T.
              Road,Mahespur, Lahartara, Varanasi, Uttar Pradesh, 221001, India
            </p>
            <div className="social-icons">
              <Link to="/" className="iconLink">
                <FaFacebookF color="#252f3e" size={16} />
              </Link>
              <Link to="/" className="iconLink">
                <FaLinkedinIn color="#252f3e" size={16} />
              </Link>
              <Link to="/" className="iconLink">
                <FaGoogle color="#252f3e" size={16} />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">©Eservz 2023 all right reserved</p>
      </footer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        fullWidth
        maxWidth="sm"
        
      >
        <DialogTitle >
          <div className="title" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <span></span>
          <button onClick={handleClose} style={{border:'0px', background:'unset',cursor:'pointer'}}><RxCross1/></button>
          </div>
        </DialogTitle>
        <DialogContent>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230614.64567786886!2d81.81434728271336!3d25.42643128665752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854cc6cba4ce4b%3A0xbe9ebdba200575e2!2sBIGHATCH%20CONSULTING%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1681919513995!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy={"no-referrer-when-downgrade"}
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}
