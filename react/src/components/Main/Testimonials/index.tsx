import Contact from "../../Header/Contact";
import H2 from "../../Title/H2";
import H3 from "../../Title/H3";
import ButtonsArrows from "../ButtonArrows";
import Review from "./Review";
import style from "./style.module.css";

const Testimonials = () => {
    return (
        <section className={style.testimonials}>
            <div className={style.testimonials_container}>
                <div className={style.testimonials_container_top}>
                    <div>
                        <H3 text="TESTIMONIALS" />
                        <H2 text="WHAT MY CLIENTS SAY" />
                    </div>
                    <div className={style.testimonials_container_top_reviews_total}>
                        <div>
                            <span>Total Reviews</span>
                            <p>323</p>
                        </div>
                        <div className={style.testimonials_container_top_reviews_arrows}>
                            <ButtonsArrows />
                            <Contact text="View All Testimonials →" />
                        </div>
                    </div>
                </div>
                <div className={style.testimonials_container_view}>
                    <Review text1="Emily Johnson" text2="USA, California" stars={3} text3="Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."/>
                    <Review text1="John Smith" text2="USA, California" stars={5} text3="Damien has an incredible talent for making every event feel effortless, and the results speak for themselves."/>
                    <Review text1="Samantha Davis" text2="USA, California" stars={4} text3="I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories."/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;

