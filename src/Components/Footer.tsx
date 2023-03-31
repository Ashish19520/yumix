import React from 'react'
import '../Style/Footer.css';
export default function Footer() {
  return (
    <div>
        <footer>
            <div className="row">
                <div className="col">
                    <img src='' alt='logo' />
                    <p>Eservz is a leading and globally renowned e-commerce and Amazon specialist agency.</p>
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
                    <p className='services'>According Setup & Mangement</p>
                    <p className='services'>Inventory planning & Managment</p>
                    <p className='services'>Pricing Strategy & Management</p>
                    <p className='services'>Keywords Analysis</p>
                </div>
                <div className="col">
                    <h3>Address</h3>
                    <p>Bighatch Consulting Private Limited 88/1, H.K.D.Compound, G.T. Road,Mahespur, Lahartara, Varanasi,
                        Uttar Pradesh, 221001, India
                    </p>
                    <div className="social-icons">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>©Eservz 2023 all right reserved</p>
        </footer>
    </div>
  )
}