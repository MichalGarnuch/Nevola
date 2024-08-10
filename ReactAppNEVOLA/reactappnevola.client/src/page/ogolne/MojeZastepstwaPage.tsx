import React, { useState } from 'react';
import { Form, Row, Col, Container, Table, Accordion } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

export const MojeZastepstwa = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Filtrowanie listy zastepstw</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Zakres od:</Form.Label>
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
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Zakres do:</Form.Label>
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
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Stan</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Aktywny</option>
                                            <option value="2">Nieaktywny</option>
                                            <option value="3">Zakonczone</option>
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
                        <th>Zastepujacy</th>
                        <th>Zastepowany</th>
                        <th>Uprawnienia zastepujacego</th>
                        <th>Okres</th>
                        <th>Data zakonczenia</th>
                        <th>Stan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Michal Nowak</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>5 dni</td>
                        <td>28.06.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Katarzyna Kowalska</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>6 dni</td>
                        <td>29.06.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Andrzej Duda</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>7 dni</td>
                        <td>30.06.2024</td>
                        <td>zakonczone</td>
                    </tr>
                    <tr>
                        <td>Barbara Wlodarczyk</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>8 dni</td>
                        <td>01.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Rafal Majewski</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>9 dni</td>
                        <td>02.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Magdalena Kozlowska</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>10 dni</td>
                        <td>03.07.2024</td>
                        <td>zakonczone</td>
                    </tr>
                    <tr>
                        <td>Wojciech Duda</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>11 dni</td>
                        <td>04.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Marta Zajac</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>12 dni</td>
                        <td>05.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Jakub Wojciechowski</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>13 dni</td>
                        <td>06.07.2024</td>
                        <td>zakonczone</td>
                    </tr>
                    <tr>
                        <td>Malgorzata Adamczyk</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>14 dni</td>
                        <td>07.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Andrzej Nowakowski</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>15 dni</td>
                        <td>08.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Robert Lewandowski</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>16 dni</td>
                        <td>09.07.2024</td>
                        <td>zakonczone</td>
                    </tr>
                    <tr>
                        <td>Joanna Krupa</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>17 dni</td>
                        <td>10.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Adam Malysz</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>18 dni</td>
                        <td>11.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                    <tr>
                        <td>Justyna Kowalczyk</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>19 dni</td>
                        <td>12.07.2024</td>
                        <td>zakonczone</td>
                    </tr>
                    <tr>
                        <td>Robert Kubica</td>
                        <td>Jan Kowalski</td>
                        <td>Kierownicze</td>
                        <td>20 dni</td>
                        <td>13.07.2024</td>
                        <td>aktywne</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}
