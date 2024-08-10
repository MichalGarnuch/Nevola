import { Link } from 'react-router-dom';
import { Row, Col, Card, Container, Accordion, Button } from 'react-bootstrap';
import './../../App.css';

export const Ogolne = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className="my-card mb-3 mt-3 mx-3" style={{ width: 'auto' }}>
                        <Link to="/ogolne" className="d-block">
                            <Card.Body>
                                <Card.Title>Ogolne</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="my-card"
                        style={{
                            width: '16rem',
                            backgroundImage: 'URL("image/TloBiznesowe4.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '1rem'
                        }}>
                        <Card.Body>
                            <Card.Title>Moje aktualnosci</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie wszystkich aktualnosci
                                        oraz okreslenie wszystkich informacji
                                        na temat tej zakladki
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/mojeaktualnosci">
                                <Button className="mb-2 mt-2" variant="success">Pokaz Moje aktualnosci</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-card"
                        style={{
                            width: '16rem',
                            backgroundImage: 'URL("image/TloBiznesowe4.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '1rem'
                        }}>
                        <Card.Body>
                            <Card.Title>Panel uzytkownika</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie panelu uzytkownika
                                        oraz okreslenie wszystkich informacji
                                        na temat tej zakladki
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/paneluzytkownika">
                                <Button className="mb-2 mt-2" variant="success">Pokaz panel Uzytkownika</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-card"
                        style={{
                            width: '16rem',
                            backgroundImage: 'URL("image/TloBiznesowe4.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '1rem'
                        }}>
                        <Card.Body>
                            <Card.Title>Moje zastepstwa</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie wszystkich zastepstw
                                        oraz okreslenie wszystkich informacji
                                        na temat tej zakladki
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/mojezastepstwa">
                                <Button className="mb-2 mt-2" variant="success">Pokaz Moje zastepstwa</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-card"
                        style={{
                            width: '16rem',
                            backgroundImage: 'URL("image/TloBiznesowe4.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '1rem'
                        }}>
                        <Card.Body>
                            <Card.Title>Wnioski</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie wszystkich wnioskow
                                        oraz okreslenie wszystkich informacji
                                        na temat tej zakladki
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/wnioski">
                                <Button className="mb-2 mt-2" variant="success">Pokaz wnioski</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-card"
                        style={{
                            width: '16rem',
                            backgroundImage: 'URL("image/TloBiznesowe4.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '1rem'
                        }}>
                        <Card.Body>
                            <Card.Title>Powiadomienia</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie wszystkich powiadomien
                                        oraz okreslenie wszystkich informacji
                                        na temat tej zakladki
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/powiadomienia">
                                <Button className="mb-2 mt-2" variant="success">Pokaz powiadomienia</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="my-card mb-3 mt-3 mx-3" style={{ width: 'auto' }}>
                        <Link to="/pracownik" className="d-block">
                            <Card.Body>
                                <Card.Title>Pracownik</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
