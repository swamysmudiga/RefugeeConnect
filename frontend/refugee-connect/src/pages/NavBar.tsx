

import { Outlet } from "react-router-dom";
import ButtonAppBar from "../components/NavBar";


export default function RootLayout(){

    return <>
    <ButtonAppBar/>
     <main>
     <Outlet/>
     </main>
    </>;
}