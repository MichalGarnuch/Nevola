import { MojaAktualnosc } from '../../types/MojeAktualnosci/MojaAktualnosc';
import { MojaAktualnoscItem } from '../../types/MojeAktualnosci/MojaAktualnoscItem';
import Table from 'react-bootstrap/Table';

type MojeAktualnosciTabelaProps = {
    listaMoichAktualnosci: MojaAktualnosc[]
}

export const MojeAktualnosciTabela = ({ listaMoichAktualnosci }: MojeAktualnosciTabelaProps) => {
    return (
        <div style={{ width: '100%' }}>
            <Table striped bordered hover style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Wazne od</th>
                        <th>Wazne do</th>
                    </tr>
                </thead>
                <tbody>
                    {listaMoichAktualnosci?.map((item, index) =>
                        <MojaAktualnoscItem key={index} MojaAktualnosc={item} />
                    )}
                </tbody>
            </Table>
        </div>
    )
}
