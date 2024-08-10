import { Powiadomienie } from '../../types/Powiadomienia/Powiadomienie';
import { PowiadomienieItem } from '../../types/Powiadomienia/PowiadomienieItem';
import Table from 'react-bootstrap/Table';

type PowiadomieniaTabelaProps = {
    listaPowiadomien: Powiadomienie[]
}

export const PowiadomieniaTabela = ({ listaPowiadomien }: PowiadomieniaTabelaProps) => {
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
                    {listaPowiadomien?.map((item, index) =>
                        <PowiadomienieItem key={index} Powiadomienie={item} />
                    )}
                </tbody>
            </Table>
        </div>
    )
}
