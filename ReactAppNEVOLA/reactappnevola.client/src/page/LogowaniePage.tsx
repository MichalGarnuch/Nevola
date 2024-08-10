import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

export const Logowanie = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={9}
                     style={{
                     backgroundImage: 'URL("image/TloLogowania.jpg")',
                     backgroundSize: 'cover', 
                     backgroundPosition: 'center'
                    }}>
                    <h1 className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark bg-opacity-50 text-white">Witamy w programie NEVOLA 365 zaloguj sie</h1>
                </Col>
                <Col xs={3} className="d-flex flex-column align-items-center justify-content-center vh-100">
                    <Navbar.Brand className="d-flex ms-auto">
                        <Link to="/" className="d-block">
                            <Image src="/image/nevola.png" className="logo" />
                        </Link> 
                    </Navbar.Brand> 
                    <Row>
                    <Form className="mb-3"> 
                        <Form.Control
                            type="email"
                            placeholder="Uzytkownik"
                            className="me-2"
                            aria-label="Szukaj"
                        />
                        </Form>
                    </Row>
                    <Row>
                    <Form className="mb-3"> 
                        <Form.Control
                            type="password"
                            placeholder="Haslo"
                            className="me-2"
                            aria-label="Szukaj"
                        />
                        </Form>
                    </Row>
                    <Row>
                <Link to="/">
                    <Button variant="success">Zaloguj sie</Button>
                        </Link>
                    </Row>
                    <Row className="mt-3">
                        <Nav.Link as={Link} to="/logowanie" style={{ color: 'blue' }}>
                            Nie masz konta? Zarejestruj sie
                        </Nav.Link>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};