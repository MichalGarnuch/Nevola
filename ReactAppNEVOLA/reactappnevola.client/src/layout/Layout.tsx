import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Button, Form, Offcanvas, Nav, NavDropdown, Image } from 'react-bootstrap';

export function Layout() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLinkClick = () => {
        setShowSidebar(false);
    };

    const backgroundStyle = {
        backgroundImage: `url('/image/TloBiznesowe7.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: 0
    };

    return (
        <div className="app" style={backgroundStyle}>
            <Navbar expand="lg" className="bg-body-tertiary mb-3 bg-dark bg-opacity-50">
                <Container fluid>
                    <Navbar.Brand className="me-2">
                        <Link to="/" className="d-block">
                            <Image src="/image/nevola.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Button
                        variant="success"
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="me-3"
                    >
                        Menu
                    </Button>
                    <Form className="d-flex ms-auto">
                        <Form.Control
                            type="search"
                            placeholder="Szukaj"
                            className="me-2"
                            aria-label="Szukaj"
                        />
                        <Button variant="success">Szukaj</Button>
                        <Link to="/logowanie">
                            <Button variant="danger" className="ms-2">Wyloguj</Button>
                        </Link>
                    </Form>
                </Container>
            </Navbar>
            <Offcanvas
                id="offcanvasNavbar-expand"
                aria-labelledby="offcanvasNavbarLabel-expand"
                placement="start"
                show={showSidebar}
                onHide={() => setShowSidebar(false)}
            >
                <Offcanvas.Header className="bg-dark text-white">
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                        Menu Glowne
                    </Offcanvas.Title>
                    <button type="button" className="btn-close btn-close-white" onClick={() => setShowSidebar(false)}></button>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-4">
                    <Nav className="flex-column">
                        <Nav.Link className="fs-4" onClick={handleLinkClick}>
                            <Link to="/" className="d-block">
                                Strona Glowna
                            </Link>
                        </Nav.Link>
                        <NavDropdown
                            title="Ogolne"
                            id="ogolne"
                            className="fs-4"
                        >
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/mojeaktualnosci" className="text-decoration-none">Moje aktualnosci</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/paneluzytkownika" className="text-decoration-none">Panel uzytkownika</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/mojezastepstwa" className="text-decoration-none">Moje zastepstwa</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/powiadomienia" className="text-decoration-none">Powiadomienia</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/wnioski" className="text-decoration-none">Wnioski</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/ogolne" className="text-decoration-none">Ogolne</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Pulpit pracownika"
                            id="offcanvasNavbarDropdown-expand"
                            className="fs-4"
                        >
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/danekadrowe" className="text-decoration-none">Dane kadrowe</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/czaspracy" className="text-decoration-none">Czas pracy</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/umowy" className="text-decoration-none">Umowy</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/danefinansowe" className="text-decoration-none">Dane finansowe</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLinkClick}>
                                <Link to="/pracownik" className="text-decoration-none">Pracownik</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}
