import { Powiadomienie } from "./Powiadomienie"

type PowiadomienieProps = {
    Powiadomienie: Powiadomienie
}

export const PowiadomienieItem = (props: PowiadomienieProps) => {
    const { Powiadomienie } = props;
    return (
        <tr>
            <td>{Powiadomienie.nazwa}</td>
            <td>{Powiadomienie.wazneOd}</td>
            <td>{Powiadomienie.wazneDo}</td>
        </tr>
    )
}
