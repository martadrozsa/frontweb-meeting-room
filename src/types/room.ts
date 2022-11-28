import {Reservation} from "./reservation";

export type Room = {
    id: number
    name: string
    description: string
    capacity: number
    imgUrl: string
    reservations: Reservation[]
}