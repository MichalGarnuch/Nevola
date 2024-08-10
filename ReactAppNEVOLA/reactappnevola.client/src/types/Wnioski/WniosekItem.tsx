import { Wniosek } from "./Wnioski"

type WniosekProps = {
    Wniosek: Wniosek
}

export const WniosekItem = (props: WniosekProps) => {
    const { Wniosek } = props;
    return (
        <tr>
            <td>{Wniosek.numer}</td>
            <td>{Wniosek.nazwa}</td>
            <td>{Wniosek.okres}</td>
            <td>{Wniosek.data}</td>
            <td>{Wniosek.odpowiedzialny}</td>
            <td>{Wniosek.etap}</td>
        </tr>
    )
}
