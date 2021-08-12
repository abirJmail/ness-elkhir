import React from 'react';
import './Navbar.css'
import { FaFacebookF, FaEnvelope,FaInstagram ,FaLinkedinIn,FaPhone} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
	
	return (
		<div className='Navbar'>
            <div className='navup'>
                <ul className='contact'>
                <li className='ml'><FaEnvelope/><a className='nav' href="#">bloodDonation@gmail.com</a></li>
                <li className='ml'><FaPhone/><a className='nav' href="#">+216 71001001</a></li>
                </ul>

                <ul className='rs'>
                <li><a className='nav' href=""><FaFacebookF/></a></li>
                <li><a className='nav' href="#"><FaInstagram/></a></li>
                <li><a  className='nav' href="#"><FaLinkedinIn/></a></li>
                </ul>

            </div>
        <div  className="navdawn">
        <div className="logo">
            <img className="img" src="https://dondesang.efs.sante.fr/themes/custom/efs/images/drip2.png" alt="Logo" />
        </div>
            <ul className="main_list">
                <Link to="/"  className='nav'><button className="list" >Home</button></Link>
                <Link to="/Hospitals"  className='nav'><button className="list" >Centres</button></Link>
                <Link to="/About"  className='nav'><button className="list" >About</button></Link>
            </ul>
    </div>
		</div>
	);
};

export default Navbar;