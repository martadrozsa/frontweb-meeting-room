import './styles.css'
type Props = {
    capacity: number
}

const RoomInfo = ({ capacity } : Props) => {
    return (
        <div className="room-details-container" >
            <span>Lugares: <b>{capacity}</b></span>
        </div>
    )
}

export default RoomInfo