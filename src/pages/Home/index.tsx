import React from "react"
import './styles.css'
import ButtonIcon from "../../components/ButtonIcon"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div>
                        <h1>Reserve uma sala para as suas reuniões</h1>
                        <p>Faça a sua reserva de salas e tenha um espaço adequado para reuniões</p>
                    </div>
                    <div>
                        <Link to="/rooms">
                            <ButtonIcon text="INICIE AGORA A SUA BUSCA" />
                        </Link>
                    </div>
                </div>
                <div className="home-image-container">
                    <img src={"/images/luxury-working-room-executive-office.jpg"}/>
                </div>
            </div>
        </div>
    )
}

export default Home
