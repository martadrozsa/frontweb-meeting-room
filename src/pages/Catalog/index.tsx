import './styles.css'
import RoomCard from "../../components/RoomCard"
import {Link} from "react-router-dom"
import Pagination from "../../components/Pagination"
import {useEffect, useState} from "react"
import {SpringPage} from "../../types/vendor/spring"
import {Room} from "../../types/room"
import roomClient from "../../clients/room-client"
import CardLoader from "./CardLoader"


const Catalog = () => {
    const [page, setPage] = useState<SpringPage<Room>>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        roomClient.getAllRooms()
            .then(response => {
                setPage(response.data)
            })
            .finally(() => {
                setIsLoading(false)
        })
    }, [])

    return (
        <div className="container my-4 catalog-container">
            <div className="row catalog-title-container">
                <h1>Reserve uma sala</h1>
            </div>
            <div className="row">
                {isLoading ? <CardLoader />: (
                    page?.content.map(room => {
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3" key={room.id}>
                            <Link to={`/rooms/${room.id}`}>
                                <RoomCard room={room}/>
                            </Link>
                        </div>
                    )}))}
            </div>
            {/*<div className="row">*/}
            {/*    <Pagination/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Catalog