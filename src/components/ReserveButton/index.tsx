import './styles.css'
import roomClient from "../../clients/room-client"
import {useHistory} from "react-router";
import {useState} from "react";

type Props = {
    text: string
    roomId: number | undefined
    disabled: boolean
    selectedDate: string
}

const ReserveButton = ({ text, roomId, disabled, selectedDate } : Props) => {

    const [reserveInprogress, setReserveInprogress] = useState<boolean>(false)
    const history = useHistory();

    const reserveRoom = () => {
        setReserveInprogress(true)

        roomClient.reserveRoom(roomId, selectedDate)
            .then(() => {
                history.push(`/rooms/${roomId}/conclusion`)
            })
    }

    function isDisabled() {
        return disabled || reserveInprogress
    }

    return (
        <div className="btn-reserve-container">
            <button className="btn btn-primary" onClick={reserveRoom} disabled={isDisabled()}>
                <h6>{text}</h6>
            </button>
        </div>
    )
}

export default ReserveButton