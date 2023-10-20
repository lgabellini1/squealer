import React from 'react'
import logo from './logo.svg';
import './styles/App.css';
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import Feed from './subpages/Feed';
import Tops from './subpages/Tops';

function App() {
	return (
		<div className="App vh-100 vw-100">
			<Navbar
				className="bg-info fixed-top"
				dir="horizontal"
			>
				<NavbarBrand>
					<img src={logo} className="bg-black" alt="logo" width={'10%'}/>
				</NavbarBrand>
				<Navbar.Text className="bg-danger">
					ciao
				</Navbar.Text>
			</Navbar>
			<Container fluid id="main-container" className="h-100 w-100">
				<Row className="h-100 w-100">
					<Col className="h-100 w-100 p-0">
						<Feed id="feed" className="feed mainSubpage"/>
					</Col>
					<Col className="h-100 w-100 p-0">
						<Tops id="tops" className="tops mainSubpage"/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
