import style from "./style.module.css";
import { FC } from 'react';

interface Props {
    imgSrc: string;
    text1: string;
    text2: string;
}

const PorfolioProject: FC<Props> = ({ imgSrc, text1, text2 }) => {
    return (
        <article className={style.porfolio_project}>
            <img src={imgSrc} alt="Portfolio Project Image" />
            <div className={style.porfolio_project_container}>
                <div>
                    <span>{text1}</span>
                    <p>{text2}</p>
                </div>
                <button className={style.porfolio_project_container_view}>
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 0.75L16.5 0.75C16.6989 0.75 16.8897 0.829018 17.0303 0.96967C17.171 1.11032 17.25 1.30109 17.25 1.5V12.75C17.25 13.1642 16.9142 13.5 16.5 13.5C16.0858 13.5 15.75 13.1642 15.75 12.75V3.31066L2.03033 17.0303C1.73744 17.3232 1.26256 17.3232 0.96967 17.0303C0.676777 16.7374 0.676777 16.2626 0.96967 15.9697L14.6893 2.25L5.25 2.25C4.83579 2.25 4.5 1.91421 4.5 1.5C4.5 1.08579 4.83579 0.75 5.25 0.75Z" fill="white" />
                    </svg>
                </button>
            </div>
        </article>
    );
};

export default PorfolioProject;

