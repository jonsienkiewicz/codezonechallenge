import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {

	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return(
		<nav className={drawerClasses}>
			<ul>
				<li><a href="/" title="Home">Home</a></li>
				<li><a href="/" title="Pages">Pages</a></li>
				<li><a href="/" title="Our Services">Our Services</a></li>
				<li><a href="/" title="Home">Recent Projects</a></li>
				<li><a href="/" title="Pages">Blog</a></li>
				<li><a href="/" title="Our Services">Contact</a></li>
			</ul>
		</nav>
	);
};

export default sideDrawer;