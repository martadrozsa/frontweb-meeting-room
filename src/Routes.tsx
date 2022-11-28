import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Catalog from "./pages/Catalog"
import RoomDetails from "./pages/RoomDetails";


const Routes = () => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/rooms" exact>
                <Catalog />
            </Route>
            <Route path="/rooms/:roomId/conclusion">
                <RoomDetails />
            </Route>
            <Route path="/rooms/:roomId">
                <RoomDetails />
            </Route>
            <Route path="/**">
                <Home/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes