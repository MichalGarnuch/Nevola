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
                        <th scope="col">Numer</th>
                        <th scope="col">Nazwa</th>
                        <th scope="col">Okres</th>
                        <th scope="col">Data</th>
                        <th scope="col">Odpowiedzialny</th>
                        <th scope="col">Etap</th>
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
