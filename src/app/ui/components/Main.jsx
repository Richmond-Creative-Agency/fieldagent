
import Header from "../header/Header";
import Link from "next/link";
import Menu from "./Menu";
import NavButton from "./NavButton";
export default function Main({children}) {
    return (
        <>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            {children}
        </main>
        <footer>
            <Menu>
                <NavButton href='http://richmondcreative.agency'>Richmond Creative Agency LLC</NavButton>
            </Menu>
        </footer>
        </>

    )
}