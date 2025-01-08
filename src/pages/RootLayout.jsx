import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <Header/>
            <main>
                Esse é o layout Principal. Abaixo vai está o conteúdo dinâmico de cada rota.
                <hr/>
                <Outlet/>
            </main>
            <br />
            <hr/>
            <footer>
                <p>Feito com React Router DOM</p>
            </footer>
        </>
    )
}
