import { Wniosek } from '../../types/Wnioski/Wniosek';
import { WniosekItem } from '../../types/Wnioski/WniosekItem';
import Table from 'react-bootstrap/Table';

type WnioskiTabelaProps = {
    listaWnioskow: Wniosek[]
}

export const WnioskiTabela = ({ listaWnioskow }: WnioskiTabelaProps) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>{Wniosek.numer}</td>
                        <td>{Wniosek.nazwa}</td>
                        <td>{Wniosek.okres}</td>
                        <td>{Wniosek.data}</td>
                        <td>{Wniosek.odpowiedzialny}</td>
                        <td>{Wniosek.etap}</td>
                    </tr>
                </thead>
                <tbody>
                    {listaWnioskow?.map((item, index) =>
                        <WniosekItem key={index} Wniosek={item} />
                    )}
                </tbody>
            </Table>
        </div>
    )
}
