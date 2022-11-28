import './styles.css'
type Props = {
    capacity: number
}

const RoomInfoDetails = ({ capacity } : Props) => {
    return (
        <div className="room-info-details-container" >
            <span>Lugares: <b>{capacity}</b></span>
        </div>
    )
}

export default RoomInfoDetails