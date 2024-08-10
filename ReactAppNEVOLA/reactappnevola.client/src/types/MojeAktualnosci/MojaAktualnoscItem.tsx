import { MojaAktualnosc } from "./MojeAktualnosci"

type MojaAktualnoscProps = {
    MojaAktualnosc: MojaAktualnosc
}

export const MojaAktualnoscItem = (props: MojaAktualnoscProps) => {
    const { MojaAktualnosc } = props;
    return (
        <tr>
            <td>{MojaAktualnosc.nazwa}</td>
            <td>{MojaAktualnosc.wazneOd}</td>
            <td>{MojaAktualnosc.wazneDo}</td>
        </tr>
    )
}
