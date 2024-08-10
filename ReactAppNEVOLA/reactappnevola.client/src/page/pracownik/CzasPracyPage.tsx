import React, { useState } from 'react';
import { Form, Row, Col, Container, Table, Accordion } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

export const CzasPracy = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Filtrowanie listy czasu pracy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj po projekcie</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Projektownaie</option>
                                            <option value="2">Biuro</option>
                                            <option value="3">Budowa</option>
                                            <option value="4">Gospodarowanie</option>
                                            <option value="5">Finanse</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>data od</Form.Label>
                                        <div className="d-flex align-items-center">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={date => setStartDate(date)}
                                                customInput={<Form.Control type="text" />}
                                            />
                                            <FaCalendarAlt
                                                onClick={() => document.querySelector('.react-datepicker__input-container input').focus()}
                                                className="ms-2"
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>data do</Form.Label>
                                        <div className="d-flex align-items-center">
                                            <DatePicker
                                                selected={endDate}
                                                onChange={date => setEndDate(date)}
                                                customInput={<Form.Control type="text" />}
                                            />
                                            <FaCalendarAlt
                                                onClick={() => document.querySelectorAll('.react-datepicker__input-container input')[1].focus()}
                                                className="ms-2"
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Forma zatrudnienia</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Umowa o prace</option>
                                            <option value="2">Umowa zlecenie</option>
                                            <option value="3">B2B</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Kod</th>
                        <th>Skrot Biura</th>
                        <th>Kierownik</th>
                        <th>Liczba godzin</th>
                        <th>Forma zatrudnienia</th>
                        <th>Projekt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>KDP</td>
                        <td>Rysio</td>
                        <td>8</td>
                        <td>B2B</td>
                        <td>Budowa</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>KDP</td>
                        <td>Rysio</td>
                        <td>6</td>
                        <td>Umowa o prace</td>
                        <td>Budowa</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>KDP</td>
                        <td>Rysio</td>
                        <td>12</td>
                        <td>Umowa zlecenie</td>
                        <td>Budowa</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
