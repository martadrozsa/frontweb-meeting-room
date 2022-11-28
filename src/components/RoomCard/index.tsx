import './styles.css'
import {Room} from "../../types/room"
import {Reservation} from "../../types/reservation";
import RoomInfo from "../RoomInfo";

type Props = {
    room: Room
}

const RoomCard = ({ room} : Props) => {
    function isUnavailable() {
        if (!room) {
            return true
        }

        let reservation: Reservation | undefined = room.reservations.find(reservation => {
            if (!reservation.reserved) {
                return reservation
            }
        })

        return reservation === undefined
    }

    return (
        <div className="base-card room-card">
            <div className="card-top-container">
                <img src={room.imgUrl} alt={room.name} />
            </div>
            <div className="card-bottom-container">
                <h6>{room.name}</h6>
                <RoomInfo capacity={room.capacity} />
                <span className="unavailable">{isUnavailable() ? "indisponível" : "" }</span>
            </div>
        </div>
    )
}

export default RoomCard