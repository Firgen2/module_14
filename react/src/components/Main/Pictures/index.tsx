import style from "./style.module.css";
import photo_img_1 from "../../../images/Image1.png"
import photo_img_2 from "../../../images/Image2.png"
import photo_img_3 from "../../../images/Image3.png"
import photo_img_4 from "../../../images/Image4.png"
import photo_img_5 from "../../../images/Image5.png"
import photo_img_6 from "../../../images/Image6.png"

const Pictures = () => {
    return (
        <div className={style.container}>
            <div className={style.pictures}>
                <img className={style.photo_1} src={photo_img_1} alt="Image" />
                <img className={style.photo_2} src={photo_img_2} alt="Image" />
                <img className={style.photo_3} src={photo_img_3} alt="Image" />
                <img className={style.photo_4} src={photo_img_4} alt="Image" />
                <img className={style.photo_5} src={photo_img_5} alt="Image" />
                <img className={style.photo_6} src={photo_img_6} alt="Image" />
            </div>
        </div>


    )
}

export default Pictures;

