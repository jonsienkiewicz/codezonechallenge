import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navigation.css';
 
const Navigation = props => (
  
    <header className="toolbar">
		<nav className="toolbar__navigation">
			<div className="toolbar__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="toolbar_navigation-items">
				<ul>
					<li><a href="https://github.com" title="Home">Home</a></li>
					<li><a href="https://github.com" title="Pages">Pages</a></li>
					<li><a href="https://github.com" title="Our Services">Our Services</a></li>
				</ul>
			</div>
			<div className="toolbar__img"><a href="/"><img src="Logo.png" alt="Dustri"/></a></div>
			<div className="toolbar_navigation-items">
				<ul>
					<li><a href="https://github.com" title="Home">Recent Projects</a></li>
					<li><a href="https://github.com" title="Pages">Blog</a></li>
					<li><a href="https://github.com" title="Our Services">Contact</a></li>
				</ul>
			</div>
		</nav>		
	</header>  
)

export default Navigation;