import Contact from "../Contact";
import Logo from "../Logo";
import Nav from "../Nav";
import style from "./style.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
            <Nav />
            <Contact />
        </header>
    )
}

export default Header;