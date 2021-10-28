import React from 'react';
import './Navbar.css';
import logo from './logo 1.jpg';


const Navbar = () =>{
	return(
		<div className="outer-div">
			<div><img src={logo} alt="logo"/></div>
			<div>
				<span>API Developer Portal</span>
				<span className="margin-left">Nutrition Wizard</span>
			</div>
			<div>
				<button type="button" class="btn btn-outline-success">Dashboard</button>
				<button type="button" class="btn btn-outline-success ms-2">Sign Out</button>
			</div>
		</div>
		)
}

export default Navbar;