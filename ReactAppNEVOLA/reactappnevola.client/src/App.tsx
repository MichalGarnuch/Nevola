import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './App.css';
//import Timer from './page/Timer';
import { MojeAktualnosciTabela } from './types/MojeAktualnosci/MojeAktualnosciTabela';
import { PowiadomieniaTabela } from './types/Powiadomienia/PowiadomieniaTabela';
import { WnioskiTabela } from './types/Wnioski/WnioskiTabela';
import { listaMoichAktualnosciPobranaZAPI } from './page/ogolne/MojeAktualnosciPage';
import { listaPowiadomienPobranaZAPI } from './page/ogolne/PowiadomieniaPage';
import { listaWnioskowPobranaZAPI } from './page/ogolne/WnioskiPage';

function App() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [listaMoichAktualnosci, setListaMoichAktualnosci] = useState<MojaAktualnosc[]>(listaMoichAktualnosciPobranaZAPI);
    const [listaPowiadomien, setListaPowiadomien] = useState<Powiadomienie[]>(listaPowiadomienPobranaZAPI);
    const [listaWnioskow, setListaWnioskow] = useState<Wniosek[]>(listaWnioskowPobranaZAPI);

    const truncateText = (text: string) => {
        return text.length > 12 ? text.substring(0, 24) + '...' : text;
    }

    const listaMoichAktualnosciSkracana = listaMoichAktualnosci.map(item => ({
        ...item,
        nazwa: truncateText(item.nazwa),
        wazneOd: truncateText(item.wazneOd),
        wazneDo: truncateText(item.wazneDo)
    }));

    const listaPowiadomienSkracana = listaPowiadomien.map(item => ({
        ...item,
        nazwa: truncateText(item.nazwa),
        wazneOd: truncateText(item.wazneOd),
        wazneDo: truncateText(item.wazneDo)
    }));

    const listaWnioskowSkracana = listaWnioskow.map(item => ({
        ...item,
        numer: truncateText(item.numer),
        nazwa: truncateText(item.nazwa),
        okres: truncateText(item.okres),
        data: truncateText(item.data),
        odpowiedzialny: truncateText(item.odpowiedzialny),
        etap: truncateText(item.etap)
    }));

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Link to="/mojeaktualnosci">
                        <Card className="my-card mt-6 mb-3 d-flex flex-column h-100 bg-dark bg-opacity-50 text-white">
                            <Card.Body>
                                <Card.Title><h1>Moje aktualnosci</h1></Card.Title>
                                <Card.Text style={{ width: '100%' }}>
                                    <h4 style={{ width: '100%' }}>Najswiezsze 3 aktualnosci, kliknij aby przejsc dalej </h4>
                                </Card.Text>
                                <MojeAktualnosciTabela listaMoichAktualnosci={listaMoichAktualnosci.slice(0, 3)} />
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/mojezastepstwa">
                        <Card className="my-card mb-3 h-100 bg-dark bg-opacity-50 text-white">
                             <Card.Body>
                                 <Card.Title><h1>Moje zastepstwa</h1></Card.Title>
                                     <Card.Text>
                                         <h2>Wojciech Majewski</h2>
                                     </Card.Text>
                             </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/umowy">
                        <Card className="my-card mb-3 h-100 bg-dark bg-opacity-50 text-white">
                             <Card.Body>
                                <Card.Title><h1>Rodzaj umowy</h1></Card.Title>
                                    <Card.Text>
                                          <h2>Aktualnie pracujesz na kontrakcie B2B</h2>
                                    </Card.Text>
                             </Card.Body>
                        </Card>
                     </Link>
                </Col>
                <Col>
                     <Link to="/czaspracy">
                         <Card className="my-card mb-3 h-100 bg-dark bg-opacity-50 text-white">
                              <Card.Body>
                                     <Card.Title><h1>Czas pracy</h1></Card.Title>
                              </Card.Body>
                         </Card>
                     </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/wnioski">
                        <Card className="my-card mb-3 h-100 bg-dark bg-opacity-50 text-white">
                            <Card.Body>
                                <Card.Title><h1>Wnioski</h1></Card.Title>
                                <Card.Text>
                                    <h4>Najswiezsze 12 wnioskow, kliknij aby przejsc dalej </h4>
                                </Card.Text>
                                <PowiadomieniaTabela listaPowiadomien={listaPowiadomien.slice(0, 12)} />
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/powiadomienia">
                        <Card className="my-card mb-3 justify-content-center h-100 bg-dark bg-opacity-50 text-white">
                            <Card.Body>
                                <Card.Title><h1>Powiadomienia</h1></Card.Title>
                                <Card.Text>
                                    <h4>Najswiezsze 12 powiadomien, kliknij aby przejsc dalej </h4>
                                </Card.Text>
                                <PowiadomieniaTabela listaPowiadomien={listaPowiadomienSkracana.slice(0, 12)}/>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
