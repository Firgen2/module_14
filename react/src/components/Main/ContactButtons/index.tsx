import style from "./style.module.css";

import icon1 from "../../../images/Icon1.png"
import icon2 from "../../../images/Icon2.png"
import icon3 from "../../../images/Icon3.png"

const ContactButtons = () => {
    return (
        <div className={style.contact_buttons}>
            <button>
                <img src={icon1} alt="Image" />
            </button>
            <button>
                <img src={icon2} alt="Image" />
            </button>
            <button>
                <img src={icon3} alt="Image" />
            </button>
        </div>
    )
}

export default ContactButtons;

