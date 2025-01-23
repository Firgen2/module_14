import Contact from "../../Header/Contact";
import H2 from "../../Title/H2";
import H3 from "../../Title/H3";
import ButtonsArrows from "../ButtonArrows";
import PorfolioProject from "./PortfolioProject";
import style from "./style.module.css";

import photo_img_9 from "../../../images/Image9.png"
import photo_img_10 from "../../../images/Image10.png"
import photo_img_11 from "../../../images/Image11.png"

const Porfolio = () => {
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
                    <PorfolioProject imgSrc={photo_img_9} text1="Faces of Resilience" text2="March 2022" />
                    <PorfolioProject imgSrc={photo_img_10} text1="A Wedding Tale" text2="January 2020" />
                    <PorfolioProject imgSrc={photo_img_11} text1="Product Elegance" text2="January 2020" />
                </div>
            </div>
        </section>
    )
}

export default Porfolio;

