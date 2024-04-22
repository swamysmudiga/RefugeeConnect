

import { Outlet } from "react-router-dom";
import ButtonAppBar from "../components/NavBar";
import NavBar from "../components/NavBar/NavBar";


export default function RootLayout(){

    return <>
    <NavBar/>
     <main>
     <Outlet/>
     </main>
    </>;
}