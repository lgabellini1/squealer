import React from "react";
import { useEffect, useState } from "react";
import { Button, Collapse, Container, Dropdown, Form, Image, Nav, Navbar } from "react-bootstrap";
import logo from '../logo.svg';
import { Link, NavLink } from "react-router-dom";



const AppNavbar = ({ smm, setSmm }) => {
	
	const [ open, setOpen ] = useState(false);


	const UserDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Button
			className="userDropdownToggle"
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Button>
	));

	const handleLogout = (event) => {
		event.preventDefault();
		setSmm(null);
	  };
	
	return (
		//rgb(204, 166, 212)"}}>
		<Navbar expand="sm" className="navbar-expand-lg bg-body-secondary">
			<Container fluid>

				<Navbar.Brand as={NavLink} to="/">
					<Image src={logo} alt="logo" width={'10%'}/>
				</Navbar.Brand>

				<Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler1" aria-controls="navbarToggler1" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				
				<Navbar.Collapse id="navbarToggler1">
					<Nav className="me-auto mb-2 mb-lg-0">
						<Nav.Item>
							<Nav.Link as={NavLink} to="/feed" >Feed</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} to="/tops" >Tops</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} to="/vips" >Vips</Nav.Link>
						</Nav.Item>
					</Nav>
					
					{ smm && 
						<>
							<Dropdown className="ml-auto">
								<Dropdown.Toggle as={UserDropdownToggle} id="dropdown-basic">
									{smm}
								</Dropdown.Toggle>

								<Dropdown.Menu style={{right:0, left:'auto'}}>
									<Dropdown.Item as={Link} to="/profile" >Profile</Dropdown.Item>
									<Dropdown.Item as={Link} to="/preferences" >Preferences</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={handleLogout}
									>
										Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</>
					}
					{/*
					<Form className="d-flex" role="search">
						<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
						<Button variant="outline-success" type="submit">Search</Button>
					</Form>
					*/}
				</Navbar.Collapse>

			</Container>
		</Navbar>
	);
}

export default AppNavbar;