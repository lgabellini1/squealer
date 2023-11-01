import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import logo from '../logo.svg';
import { NavLink } from "react-router-dom";



const AppNavbar = () => {
	

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
					</Nav>
					<Form className="d-flex" role="search">
						<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
						<Button variant="outline-success" type="submit">Search</Button>
					</Form>
				</Navbar.Collapse>

			</Container>
		</Navbar>
	);
}

export default AppNavbar;