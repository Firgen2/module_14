import Ticker from "../Ticker";
import TopMain from "../TopMain";
import style from "./style.module.css";

const Main = () => {
    const texts: string[] = [
        "EVENT",
        "COMERCIAL",
        "PRODUCT",
        "WEDDING",
        "LANDSCAPE",
        "BRANDING",
        "PORTRAIT"
    ]
    return (
        <main className={style.main}>
            <TopMain />
            <Ticker texts={texts} />
        </main>
    )
}

export default Main;

