import {ReactComponent as ArrowIcon} from "../../assets/images/arrow.svg"
import RoomInfoDetails from "./RoomInfoDetails"
import './styles.css'
import {Link, useParams} from "react-router-dom"
import React, {useEffect, useState} from "react"
import roomClient from "../../clients/room-client"
import RoomInfoLoader from "./RoomInfoLoader"
import RoomDetailsLoader from "./RoomDetailsLoader"
import ReserveButton from "../../components/ReserveButton"
import DropdownList from "react-widgets/DropdownList"
import { useLocation } from 'react-router-dom'
import {wait} from "@testing-library/user-event/dist/utils"
import { useHistory } from "react-router-dom"
import {Reservation} from "../../types/reservation"
import LoadingIcons from "react-loading-icons"
import {Room} from "../../types/room"

type UrlParams = {
    roomId: string
}

const RoomDetails = () => {
    const [room, setRoom] = useState<Room>()
    const {roomId} = useParams<UrlParams>()
    const [isLoading, setIsLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState<string>("")
    const [conclusion, setConclusion] = useState<boolean>(false)

    const location = useLocation();
    const history = useHistory();

    const unavailableLabel = "Indisponível"

    useEffect(() => {
        setIsLoading(true)
        roomClient.getRoomById(roomId)
            .then(response => {
                setRoom(response.data)
            })
            .finally(() => {
                    setIsLoading(false)
                }
            )

        if (location.pathname.includes("conclusion")) {
            setConclusion(true)
            returnToCatalog()
        }

    }, [roomId, location])

    async function returnToCatalog() {
        await wait(5000)
        history.push("/rooms")
    }

    function getReservations() {
        if (!room) {
            return ["loading"]
        }

        let available:string[] = []

        room.reservations.forEach(reservation => {
            if (!reservation.reserved) {
                available.push(reservation.date)
            }
        })

        if (available.length === 0) {
            return []
        }

        return available
    }

    function isReserveButtonDisabled() {
        return selectedDate === null || selectedDate === "" || selectedDate === unavailableLabel
    }

    function onDateSelected(value : string) {
        if (value === null || value.length === 0) {
            return
        }

        setSelectedDate(value)
        console.log(value)
    }

    function isUnavailable() {
        if (location.pathname.includes("conclusion")) {
            return false
        }

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
        <div className="product-details-container">
            <div className=" base-card product-details-card">
                <Link to="/rooms">
                    <div className="goback-container">
                        <ArrowIcon/>
                        <h2>VOLTAR</h2>
                    </div>
                </Link>
                <div className="row">
                    <div className="col-xl-6 info-details-row">
                        {isLoading ? <RoomInfoLoader/> :
                            <>
                                <div className="img-container">
                                    <img src={room?.imgUrl} alt={room?.name}/>
                                </div>
                            </>
                        }
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="name-capacity-container">
                                    <h1>{room?.name}</h1>
                                    {room && <RoomInfoDetails capacity={room?.capacity}/>}
                                    <span className="name-capacity-container-span">{isUnavailable() ? "indisponível" : "" }</span>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="reserve-button-container">
                                    <ReserveButton text="Reservar" roomId={room?.id} disabled={isReserveButtonDisabled()} selectedDate={selectedDate}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="reserve-dropdown-container">
                                    <DropdownList data={getReservations()} onChange={onDateSelected} disabled={conclusion}/>
                                </div>
                            </div>
                        </div>
                        {conclusion ?
                            <div className="row">
                                <div className="col-xl-12">
                                    <h1 className="reserve-info">Reserva realizada com sucesso!</h1>
                                </div>
                                <div className="col-xl-12 reserve-redirect-info">
                                    Redirecionando...<LoadingIcons.TailSpin stroke="#98ff98" width="24"/>
                                </div>
                            </div>
                        :<></>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        {isLoading ? <RoomDetailsLoader/> :
                            <div className="description-container">
                                <h2>Descrição da sala</h2>
                                <p>{room?.description}</p>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoomDetails