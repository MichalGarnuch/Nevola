import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

/** A public prototype must not imply that navigating a link authenticates anyone. */
export const Logowanie = () => (
    <Container className="py-5">
        <h1>NEVOLA 365 — demo</h1>
        <p>To publiczny prototyp z przykładowymi danymi. Nie obsługuje kont użytkowników ani logowania.</p>
        <p>Nie wprowadzaj tu hasła firmowego ani danych pracowników.</p>
        <Link to="/" className="btn btn-success">Otwórz demo</Link>
    </Container>
);
