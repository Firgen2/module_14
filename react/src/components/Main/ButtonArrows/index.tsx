import style from "./style.module.css";

const ButtonsArrows = () => {

    return (
        <div className={style.container}>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M10.25 1.5L1.75 10L10.25 18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M1.75 1.5L10.25 10L1.75 18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>
        </div>
    )
}

export default ButtonsArrows;

