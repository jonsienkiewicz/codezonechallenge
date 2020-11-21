import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Carousel from './components/Carousel/Carousel';
import Services from './components/Services/Services';

class App extends Component {
	state = {
		sideDrawerOpen: false
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		});
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};

	
	render() {
		let backdrop;

		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler}/>
		}
		return (
			<div style={{height:'100%'}}>
				<Navigation drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer show={this.state.sideDrawerOpen} />
				{backdrop}
				<main style={{marginTop: '10px'}}>						
					<Carousel />
					<Services />
					{/*<Player />
					<Faq />
					<Form />
					<Map />
					<Newsletter />
					*/}
				</main>
			</div>
		);
	}
}

export default App;