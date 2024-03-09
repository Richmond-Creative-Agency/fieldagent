
import Menu from "../components/Menu";
import NavButton from "../components/NavButton";


export default function Header() {

    return(
        <header className="">
            <Menu>
                <NavButton href="/">Home</NavButton>
                <NavButton href="/guide/canvass">Canvass</NavButton>
            </Menu>
        </header>
    )
}