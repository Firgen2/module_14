import Pictures from "./Pictures";
import Ticker from "../Ticker";
import TopMain from "./TopMain";
import style from "./style.module.css";
import About from "./About";
import Services from "./Services";
import Porfolio from "./Portfolio";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Name from "./Name";
import Footer from "../Footer";

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
            <Pictures />
            <About />
            <Services />
            <Porfolio />
            <Faq />
            <Testimonials />
            <Name />
            <Ticker texts={texts} />
            <Footer />  
        </main>
    )
}

export default Main;

