import ButtonAdd from "../Main/ButtonAdd";
import ContactButtons from "../Main/ContactButtons";
import style from "./style.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={style.footer}>
                <div className={style.footer_letter1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="162" height="200" viewBox="0 0 162 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M162 120L162 80L52 80C40.954 80 32 71.0457 32 60C32 48.9543 40.954 40 52 40L162 40L162 0L62 -4.37114e-06C6.772 -6.78523e-06 -38 44.7715 -38 100C-38 155.228 6.77199 200 62 200L162 200L162 160L52 160C40.954 160 32 151.046 32 140C32 128.954 40.954 120 52 120L162 120Z" fill="#1C1C21" />
                    </svg>
                </div>
                <div className={style.footer_lets}>
                    <p>A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</p>
                    <div>
                        <span className={style.text2}>LET`S <ButtonAdd /></span>
                        <p className={style.text2}>WORK TOGETHER</p>
                    </div>
                </div>
                <div className={style.footer_home}>
                    <div className={style.footer_clients}>
                        <span>Home</span>
                        <span>About Me</span>
                        <span>My Works</span>
                        <span>Testimonials</span>
                    </div>
                    <div className={style.footer_clients}>
                        <span>Clients</span>
                        <span>Klovesto</span>
                        <span>Nukeway</span>
                        <span>Cloven`s</span>
                        <span>MenVol</span>
                    </div>
                    <div className={style.footer_clients}>
                        <span>Portfolio</span>
                        <span>Events</span>
                        <span>Portrait</span>
                        <span>Branding</span>
                        <span>Commerciale</span>
                        <span>Wedding</span>
                    </div>
                    <div className={style.footer_clients}>
                        <span>Services</span>
                        <span>Portraits</span>
                        <span>Events</span>
                        <span>Commercial </span>
                    </div>
                </div>
                <div className={style.footer_letter2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="162" height="200" viewBox="0 0 162 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24537e-06 120L3.49691e-06 80L110 80C121.046 80 130 71.0457 130 60C130 48.9543 121.046 40 110 40L1.74846e-06 40L0 0L100 -4.37114e-06C155.228 -6.78523e-06 200 44.7715 200 100C200 155.228 155.228 200 100 200L8.74228e-06 200L6.99382e-06 160L110 160C121.046 160 130 151.046 130 140C130 128.954 121.046 120 110 120L5.24537e-06 120Z" fill="#1C1C21" />
                    </svg>
                </div>
            </div>
            <div className={style.deep_footer}>
                <div>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
                <div>
                    <ContactButtons />
                </div>
                <div>
                    <span>© 2024 Damien Braun Photography. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

