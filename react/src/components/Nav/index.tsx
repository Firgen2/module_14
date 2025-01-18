import style from "./style.module.css";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
        </nav>

    )
}

export default Nav;