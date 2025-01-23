import H2 from "../../Title/H2";
import H3 from "../../Title/H3";
import Answer from "./Answer";
import style from "./style.module.css";

const Faq = () => {
    return (
        <section className={style.faq}>
            <div className={style.faq_container}>
                <div className={style.faq_container_top}>
                    <div>
                        <H3 text="FAQ`S" />
                        <H2 text="FREQUENTLY ASKED QUESTIONS" />
                    </div>
                </div>
                <div className={style.faq_container_view}>
                    <div className={style.faq_container_view_left}>
                        <Answer text1="What type of photography do you specialize in?" text2="I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories." />
                        <Answer text1="How can I book a photography session with you?" />
                        <Answer text1="What equipment do you use for your photography?" />
                        <Answer text1="Can I request a specific location for a " />
                    </div>
                    <div className={style.faq_container_view_right}>
                        <Answer text1="What is your editing process like?" />
                        <Answer text1="Are digital files included in your photography packages?" />
                        <Answer text1="Do you offer prints of your photographs?" text2="Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing." />
                        <Answer text1="How long does it take to receive the edited photos after a session?" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;

