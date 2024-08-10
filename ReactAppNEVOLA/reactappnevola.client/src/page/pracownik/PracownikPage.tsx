import { Link } from 'react-router-dom';
import { Row, Col, Card, Container, Accordion, Button } from 'react-bootstrap';
import './../../App.css';

export const Pracownik = () => {
    return (
        <Container fluid>
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
                            <Card.Title>Dane kadrowe</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie danych kadrowych
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/danekadrowe">
                                <Button className="mb-2 mt-2" variant="success">Pokaz dane kadrowe</Button>
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
                            <Card.Title>Czas Pracy</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie czasu pracy
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/czaspracy">
                                <Button className="mb-2 mt-2" variant="success">Pokaz czas pracy</Button>
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
                            <Card.Title>Umowy</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie umow
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/umowy">
                                <Button className="mb-2 mt-2" variant="success">Pokaz umowy</Button>
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
                            <Card.Title>Dane finansowe</Card.Title>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="mb-2 mt-3">
                                    <Accordion.Header>Szczegoly</Accordion.Header>
                                    <Accordion.Body>
                                        Wyswietlenie danych finansowych
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Link to="/danefinansowe">
                                <Button className="mb-2 mt-2" variant="success">Pokaz dane finansowe</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
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
        </Container>
    );
}
