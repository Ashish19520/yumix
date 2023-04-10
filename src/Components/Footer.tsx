import React from 'react'
import '../Style/Footer.css';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from 'react-router-hash-link';


export default function Footer() {
  return (
    
    <div>
        <footer>
            <div className="row">
                <div className="col">
                    <img src="/images/logo.png" alt='logo' style={{height:"68px",width:"68px"}}/>
                    <p className='content'>Eservz is a leading and globally renowned e-commerce and Amazon specialist agency.</p>
                </div>
                <div className="col">
                    <h3>Quick Link</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Services</h3>
                    <HashLink to='#digitalMedia' smooth style={{ textDecoration:'none'}}><p className='services'>Digital Media</p></HashLink>
                    <HashLink to='#analytics' smooth style={{ textDecoration:'none'}}><p className='services'>Analytics</p></HashLink>
                    <HashLink to='#customerExperience' smooth style={{ textDecoration:'none'}}><p className='services'>Customer Experience</p></HashLink>
                    <p className='services'>Inventory planning & Managment</p>
                    <p className='services'>Pricing Strategy & Management</p>
                    <p className='services'>Keywords Analysis</p>
                </div>
                <div className="col">
                    <h3>Address</h3>
                    <p className='address'><span style={{marginRight:'8px'}}> <TfiLocationPin color='#rgb(37, 47, 62)'/></span>Bighatch Consulting Private Limited 88/1, H.K.D.Compound, G.T. Road,Mahespur, Lahartara, Varanasi,
                        Uttar Pradesh, 221001, India
                    </p>
                    <div className="social-icons">
                    <Link to="/" className="iconLink"><FaFacebookF color="#252f3e" size={16} /></Link>
                    <Link to="/" className="iconLink"><FaLinkedinIn color="#252f3e" size={16} /></Link>
                    <Link to="/" className="iconLink"><FaGoogle color="#252f3e" size={16} /></Link>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>©Eservz 2023 all right reserved</p>
        </footer>
    </div>
  )
}