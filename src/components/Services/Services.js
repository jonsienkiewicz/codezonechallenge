import React from 'react';
import './Services.css';

const services = props => (
		<div className="container">
				<div className="services__title">
					<div className="services__img"><img src="Icon-1.svg" alt="icon"/></div>
					<h5><span>OUR SERVICES</span></h5>
					<h2>Industries Served</h2>
				</div>	
				<div className="services__boxes">
					<div className="services__boxes-img" ><img src="Image.png" alt="icon"/></div>
					<div className="services__boxes-side">
						<h5>We are a leading industry & factory company in new york</h5>
						<a>READ MORE</a>
					</div>
				</div>
				<div className="texts">
					<div className="texts__boxes">
						<h5>Industrial maintenance solutions</h5>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit 
						vehicula est eget felis vehicula imperdiet non lacus at quam 
						gravida porta usce viverra 
						consectetur turpis id lacinia 
						dolor sit amet.
						</p>
						<a> READ MORE</a>
					</div>
					<div>
						<h5>Embrace new technologies </h5>
						<p>
						Lorem ipsum 
						dolor sit amet, consectetur adipiscing 
						elit vehicula est eget felis vehicula imperdiet 
						non lacus at quam gravida porta usce viverra 
						consectetur turpis id lacinia dolor sit amet.
						</p>
						<a> READ MORE</a>
					</div>
					<div>
						<h5>Large-scale production for business</h5>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit 
						vehicula est eget felis vehicula imperdiet non lacus 
						at quam gravida porta usce viverra consectetur 
						turpis id lacinia dolor sit amet.
						</p>
						<a> READ MORE</a>
					</div>
				</div>
	    </div>
);

export default services;