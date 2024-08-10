import React, { useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { Powiadomienie } from '../../types/Powiadomienia/Powiadomienie';
import { PowiadomienieItem } from '../../types/Powiadomienia/PowiadomienieItem';
import './../../App.css';

export const listaPowiadomienPobranaZAPI: Powiadomienie[] =
    [
        {
            nazwa: "Zaakceptowany e-wniosek o delegacje - Anna Nowak (1145_0), 16.06.2024",
            wazneOd: "15.06.2024",
            wazneDo: "16.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o delegacje - Piotr Kowal (1146_0), 17.06.2024",
            wazneOd: "16.06.2024",
            wazneDo: "17.06.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o prace zdalna - Maria Lis (1147_0), 18.06.2024",
            wazneOd: "17.06.2024",
            wazneDo: "18.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o urlop - Krzysztof Jankowski (1148_0), 19.06.2024",
            wazneOd: "18.06.2024",
            wazneDo: "19.06.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o delegacje - Ewa Wisniewska (1149_0), 20.06.2024",
            wazneOd: "19.06.2024",
            wazneDo: "20.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o prace zdalna - Tomasz Zielinski (1150_0), 21.06.2024",
            wazneOd: "20.06.2024",
            wazneDo: "21.06.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o urlop - Agnieszka Mazur (1151_0), 22.06.2024",
            wazneOd: "21.06.2024",
            wazneDo: "22.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o delegacje - Michal Wojcik (1152_0), 23.06.2024",
            wazneOd: "22.06.2024",
            wazneDo: "23.06.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o prace zdalna - Dorota Kowalczyk (1153_0), 24.06.2024",
            wazneOd: "23.06.2024",
            wazneDo: "24.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o urlop - Jacek Malinowski (1154_0), 25.06.2024",
            wazneOd: "24.06.2024",
            wazneDo: "25.06.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o delegacje - Magdalena Kozlowska (1155_0), 26.06.2024",
            wazneOd: "25.06.2024",
            wazneDo: "26.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o prace zdalna - Andrzej Nowakowski (1156_0), 27.06.2024",
            wazneOd: "26.06.2024",
            wazneDo: "27.06.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o urlop - Barbara Wlodarczyk (1157_0), 28.06.2024",
            wazneOd: "27.06.2024",
            wazneDo: "28.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o delegacje - Rafal Majewski (1158_0), 29.06.2024",
            wazneOd: "28.06.2024",
            wazneDo: "29.06.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o prace zdalna - Marta Zajac (1159_0), 30.06.2024",
            wazneOd: "29.06.2024",
            wazneDo: "30.06.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o urlop - Jakub Wojciechowski (1160_0), 01.07.2024",
            wazneOd: "30.06.2024",
            wazneDo: "01.07.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o delegacje - Malgorzata Adamczyk (1161_0), 02.07.2024",
            wazneOd: "01.07.2024",
            wazneDo: "02.07.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o prace zdalna - Andrzej Nowakowski (1162_0), 03.07.2024",
            wazneOd: "02.07.2024",
            wazneDo: "03.07.2024",
        },
        {
            nazwa: "Zaakceptowany e-wniosek o urlop - Barbara Wlodarczyk (1163_0), 04.07.2024",
            wazneOd: "03.07.2024",
            wazneDo: "04.07.2024",
        },
        {
            nazwa: "Niezaakceptowany e-wniosek o delegacje - Rafal Majewski (1164_0), 05.07.2024",
            wazneOd: "04.07.2024",
            wazneDo: "05.07.2024",
        },

    ];

export const Powiadomienia = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [listaPowiadomien, setListaPowiadomien] = useState<Powiadomienie[]>([]);

    useEffect(() => {
        setListaPowiadomien(listaPowiadomienPobranaZAPI);
    }, [])

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Filtrowanie listy powiadomien</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj wydarzenia </Form.Label>
                                        <Form.Control type="text" />
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
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Zakres powiadomienia</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Ogolne</option>
                                            <option value="2">Pracownicze</option>
                                            <option value="3">Korporacyjne</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Stan wydarzenia</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Zaakceptowane</option>
                                            <option value="2">Anulowane</option>
                                            <option value="3">W toku</option>
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
                        <th>Nazwa</th>
                        <th>Wazne od</th>
                        <th>Wazne do</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPowiadomien?.map((item, index) => <PowiadomienieItem key={index} Powiadomienie={item} />)}
                </tbody>
            </Table>
        </Container>
    );
};
