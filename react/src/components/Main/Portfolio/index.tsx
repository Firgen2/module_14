import Contact from "../../Header/Contact";
import H2 from "../../Title/H2";
import H3 from "../../Title/H3";
import ButtonsArrows from "../ButtonArrows";
import style from "./style.module.css";

const Porfolio = () => {
    const texts:string[] = [
        "Coverage for weddings, parties, corporate functions, and more.",
        "Skilled photographers who know how to seize the moment.",
        "A mix of candid and posed shots for a comprehensive story.",
        "Quick turnaround for you to relive the day's highlights.",
    ]

    return (
        <section className={style.porfolio}>
            <div className={style.porfolio_container}>
                <div className={style.porfolio_container_top}>
                    <div>
                        <H3 text="PORTFOLIO" />
                        <H2 text="EXPLORE MY PHOTOGRAPHY WORK." />
                    </div>
                    <div className={style.porfolio_container_top_buttons}>
                        <ButtonsArrows />
                        <Contact text="View All Works →" />
                    </div>
                </div>
                <div className={style.portofolio_container_view}>
                    
                </div>
            </div>
        </section>
    )
}

export default Porfolio;

