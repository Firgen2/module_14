import style from "./style.module.css";

import photo_img_7 from "../../../images/Image7.png"
import Contact from "../../Header/Contact";
import ContactButtons from "../ContactButtons";
import H2 from "../../Title/H2";
import H3 from "../../Title/H3";
import H4 from "../../Title/H4";

const About = () => {
    return (
        <section className={style.about}>
            <div className={style.about_container}>
                <div className={style.about_top}>
                    <div>
                        <H3 text="ABOUT" />
                        <H2 text="I AM MAXIM" />
                    </div>
                    <button>Know More →</button>
                </div>
                <div className={style.introduction}>
                    <img className={style.photo_1} src={photo_img_7} alt="Image" />
                    <div className={style.introduction_right}>
                        <div className={style.introduction_top}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7" />
                            </svg>
                            <H4 text="Introduction"/>
                        </div>
                        <p>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                        <div className={style.introduction_bottom}>
                            <div className={style.contact_information}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                    <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7" />
                                </svg>
                                <H4 text="Contact Information"/>
                            </div>
                            <div className={style.introduction_bottom_info}>
                                <div>
                                    <span>Email</span>
                                    <p>maksqwertyn@gmail.com</p>
                                </div>
                                <div>
                                    <span>Phone Number</span>
                                    <p>+00 000000000</p>
                                </div>
                            </div>
                            <div className={style.introduction_bottom_buttons}>
                                <div>
                                    <ContactButtons />
                                </div>
                                <div className={style.introduction_bottom_buttons_grow}>
                                    <Contact text="Let`s Work" />
                                </div>
                                <div className={style.introduction_bottom_buttons_grow}>
                                    <Contact text="Download CV" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;