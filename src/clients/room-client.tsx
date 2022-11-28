import roomsDatabase from "./rooms.json"
import {SpringPage} from "../types/vendor/spring";
import {Room} from "../types/room";


const getAllRooms = () => {
    return Promise.resolve({ data: roomsDatabase as SpringPage<Room> })
}

const getRoomById = (roomId: string) => {
    let room = roomsDatabase.content.find(room => {
        return room.id.toString() === roomId
    })

    return Promise.resolve({ data: room as Room })
}

const reserveRoom = (roomId: number | undefined, selectedDate:string) => {
    let room = roomsDatabase.content.find(room => {
        return room.id === roomId
    })

    if (room) {
        room.reservations.forEach(reservation => {
            if (reservation.date === selectedDate) {
                reservation.reserved = true
            }
        })
    }

    return Promise.resolve()
}

const roomClient = {
    getAllRooms: getAllRooms,
    getRoomById: getRoomById,
    reserveRoom: reserveRoom
}

export default roomClient