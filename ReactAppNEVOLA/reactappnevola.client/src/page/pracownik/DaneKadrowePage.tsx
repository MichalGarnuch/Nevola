import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const DaneKadrowe = () => {
    return (
        <Container fluid className="bg-dark bg-opacity-50">
            <Form>
                <Row>
                    <Col xs="2" eventKey="0" className="pb-3 mt-2">
                        <Button variant="primary">Zapisz zmiany</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="daneOsobowe"
                        className="mb-3 custom-tabs"
                    >
                        <Tab sm={2} eventKey="daneOsobowe" title={<span style={{ color: 'white' }}>Dane osobowe</span>}>
                            <Row>
                                <h5 className="mb-4 text-white">DANE OSOBOWE</h5>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Imie</Form.Label>
                                        <Form.Control sm={2} type="text" placeholder="Michal" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Drugie imie</Form.Label>
                                        <Form.Control sm={2} type="text" placeholder="Piotr" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="text" placeholder="Garnuch" />
                                    </Form.Group>
                                </Col>
                                <Row>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Control type="text" placeholder="Specjalista" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Dzial</Form.Label>
                                        <Form.Control type="text" placeholder="Nieruchomosci" />
                                    </Form.Group>
                                    </Col>
                                </Row>
                            </Row>
                        </Tab>
                        <Tab eventKey="daneAdresowe" title={<span style={{ color: 'white' }}>Dane adresowe</span>}>
                            <h5 className="mb-4 text-white">DANE ADRESOWE</h5>
                            <h5 className=" text-white">Adres zamieszkania:</h5>
                            <Row>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Kraj</Form.Label>
                                        <Form.Control sm={2} type="text" placeholder="Polska" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Wojewodztwo</Form.Label>
                                        <Form.Control sm={2} type="text" placeholder="Mazowieckie" />
                                    </Form.Group>
                                </Col>
                             </Row>
                             <Row>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Miejscowosc</Form.Label>
                                        <Form.Control sm={2} type="text" placeholder="Warszawa" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Ulica</Form.Label>
                                        <Form.Control type="text" placeholder="Drogowa" />
                                    </Form.Group>
                                </Col>
                             </Row>
                             <Row>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Nr dom/lokalu</Form.Label>
                                        <Form.Control type="text" placeholder="38/331" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Kod pocztowy</Form.Label>
                                        <Form.Control type="text" placeholder="10-100 Warszawa" />
                                    </Form.Group>
                                </Col>
                             </Row>
                                <h5 className=" text-white">Adres wykonywania pracy zdalnej:</h5>
                                <Row>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3 text-white">
                                            <Form.Label>Kraj</Form.Label>
                                            <Form.Control sm={2} type="text" placeholder="Polska" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3 text-white">
                                            <Form.Label>Wojewodztwo</Form.Label>
                                            <Form.Control sm={2} type="text" placeholder="Mazowieckie" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3 text-white">
                                            <Form.Label>Miejscowosc</Form.Label>
                                            <Form.Control sm={2} type="text" placeholder="Warszawa" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3 text-white">
                                            <Form.Label>Ulica</Form.Label>
                                            <Form.Control type="text" placeholder="Drogowa" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3 text-white">
                                            <Form.Label>Nr dom/lokalu</Form.Label>
                                            <Form.Control type="text" placeholder="38/331" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3 text-white">
                                            <Form.Label>Kod pocztowy</Form.Label>
                                            <Form.Control type="text" placeholder="10-100 Warszawa" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                        </Tab>
                        <Tab eventKey="Inne" title={<span style={{ color: 'white' }}>Inne</span>}>
                            <Row>
                                <h5 className="mb-4 text-white">INNE</h5>
                                <Col xs={8}>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                        <Form.Control type="textarea" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3 text-white">
                                        <Form.Label>Uwagi</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
             {/* Sekcja wyœwietlaj¹ca czas pracy pracownika z aplikacji  <div> Tutaj strona z danymi kadrowymi </div>*/}
        </Container>
    )
}
