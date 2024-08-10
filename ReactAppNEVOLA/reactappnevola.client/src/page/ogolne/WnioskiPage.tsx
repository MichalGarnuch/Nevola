import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Container, Table, Accordion } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { Wniosek } from '../../types/Wnioski/Wniosek';
import { WniosekItem } from '../../types/Wnioski/WniosekItem';

export const listaWnioskowPobranaZAPI: Wniosek[] =
    [
        {
            numer: "1wZaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            nazwa: "14.06.2024",
            okres: "15.06.2024",
            data: "1Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            odpowiedzialny: "14.06.2024",
            etap: "15.06.2024",
        },
        {
            numer: "2wZaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            nazwa: "14.06.2024",
            okres: "15.06.2024",
            data: "1Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            odpowiedzialny: "14.06.2024",
            etap: "15.06.2024",
        },
        {
            numer: "3wZaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            nazwa: "14.06.2024",
            okres: "15.06.2024",
            data: "1Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            odpowiedzialny: "14.06.2024",
            etap: "15.06.2024",
        },
        {
            numer: "4wZaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            nazwa: "14.06.2024",
            okres: "15.06.2024",
            data: "1Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            odpowiedzialny: "14.06.2024",
            etap: "15.06.2024",
        },
        {
            numer: "Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            nazwa: "14.06.2024",
            okres: "15.06.2024",
            data: "1Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            odpowiedzialny: "14.06.2024",
            etap: "15.06.2024",
        },
        {
            numer: "Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            nazwa: "14.06.2024",
            okres: "15.06.2024",
            data: "1Zaakceptowany e-wniosek o delegacje - Jan Kowalski (1144_0), 15.06.2024",
            odpowiedzialny: "14.06.2024",
            etap: "15.06.2024",
        },
    ];

export const Wnioski = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [listaWnioskow, setListaWnioskow] = useState<Wniosek[]>([]);

    useEffect(() => {
        setListaWnioskow(listaWnioskowPobranaZAPI);
    }, [])

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Filtrowanie listy wnioskow</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">delegacja</option>
                                            <option value="2">urlop</option>
                                            <option value="3">praca zdalna</option>
                                            <option value="4">zmiane stanowiska</option>
                                            <option value="5">zmiane danych personalnych</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Definicja</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Stan</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Aktywny</option>
                                            <option value="2">Nieakwtywny</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>data wniosku</Form.Label>
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
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Nazwa</th>
                        <th>Okres</th>
                        <th>Data</th>
                        <th>Odpowiedzialny</th>
                        <th>Etap</th>
                    </tr>
                </thead>
                <tbody>
                    {listaWnioskow?.map((item, index) => <WniosekItem key={index} Wniosek={item} />)}
                </tbody>
            </Table>
        </Container>
    );
};