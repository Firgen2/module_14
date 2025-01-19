import style from "./style.module.css";

import photo_img_7 from "../../../images/Image7.png"

const About = () => {
    return (
        <section className={style.about}>
            <div className={style.about_container}>
                <div className={style.about_top}>
                    <p>ABOUT<p>I AM DAMIAN</p></p>
                    <button>Know More →</button>
                </div>
                <div className={style.introduction}>
                    <img className={style.photo_1} src={photo_img_7} alt="Image" />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                            <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7" />
                        </svg>
                        <span>Introduction</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;