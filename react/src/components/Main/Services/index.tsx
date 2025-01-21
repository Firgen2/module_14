import Contact from "../../Header/Contact";
import H2 from "../../Title/H2";
import H3 from "../../Title/H3";
import ButtonsArrows from "../ButtonArrows";
import style from "./style.module.css";
import photo_img_8 from "../../../images/Image8.png"
import ButtonAdd from "../ButtonAdd";
import Highlights from "../Highlights";

const Services = () => {
    const texts:string[] = [
        "Coverage for weddings, parties, corporate functions, and more.",
        "Skilled photographers who know how to seize the moment.",
        "A mix of candid and posed shots for a comprehensive story.",
        "Quick turnaround for you to relive the day's highlights.",
    ]

    return (
        <section className={style.services}>
            <div className={style.services_container}>
                <div className={style.services_container_top}>
                    <div>
                        <H3 text="SERVICES" />
                        <H2 text="MY PHOTOGRAPHY SERVICES" />
                    </div>
                    <div className={style.services_container_top_buttons}>
                        <ButtonsArrows />
                        <Contact text="View All Services →" />
                    </div>
                </div>
                <div className={style.event}>
                    <img className={style.photo_1} src={photo_img_8} alt="Image" />
                    <div className={style.event_container}>
                        <div>
                            <span>EVENT</span>
                            <ButtonAdd />
                        </div>
                        <p>Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.</p>
                        <h5>Service Highlights</h5>
                        <Highlights texts={texts}/>      
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;

