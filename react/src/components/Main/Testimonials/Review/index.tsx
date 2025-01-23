import React, { FC } from 'react';
import style from './style.module.css';
import ContactButtons from '../../ContactButtons';

// Интерфейс пропсов
interface Props {
    text1: string;
    text2: string;
    stars: number;
    text3: string;
}

// Компонент Review
const Review: FC<Props> = ({ text1, text2, stars, text3 }) => {
    // Массив для хранения SVG элементов
    const starElements = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            // Заполненная звезда
            starElements.push(
                <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.27466 1.9429C9.04735 0.62493 10.9527 0.624932 11.7253 1.9429L13.4512 4.88664C13.7332 5.36761 14.2031 5.70904 14.7477 5.8286L18.0807 6.5603C19.5729 6.8879 20.1617 8.69996 19.147 9.8421L16.8806 12.3931C16.5103 12.8099 16.3308 13.3624 16.3854 13.9173L16.7195 17.3132C16.869 18.8337 15.3276 19.9536 13.9278 19.3415L10.8013 17.9744C10.2904 17.751 9.70956 17.751 9.19873 17.9744L6.0722 19.3415C4.6724 19.9536 3.13097 18.8337 3.28054 17.3132L3.61459 13.9173C3.66917 13.3624 3.48967 12.8099 3.11938 12.3931L0.853022 9.8421C-0.161664 8.69995 0.427111 6.8879 1.91935 6.5603L5.25233 5.8286C5.79689 5.70904 6.26683 5.36761 6.54881 4.88664L8.27466 1.9429Z" fill="#FFCE22" strokeWidth="1"/>
                </svg>
            );
        } else {
            // Пустая звезда
            starElements.push(
                <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.27466 1.9429C9.04735 0.62493 10.9527 0.624932 11.7253 1.9429L13.4512 4.88664C13.7332 5.36761 14.2031 5.70904 14.7477 5.8286L18.0807 6.5603C19.5729 6.8879 20.1617 8.69996 19.147 9.8421L16.8806 12.3931C16.5103 12.8099 16.3308 13.3624 16.3854 13.9173L16.7195 17.3132C16.869 18.8337 15.3276 19.9536 13.9278 19.3415L10.8013 17.9744C10.2904 17.751 9.70956 17.751 9.19873 17.9744L6.0722 19.3415C4.6724 19.9536 3.13097 18.8337 3.28054 17.3132L3.61459 13.9173C3.66917 13.3624 3.48967 12.8099 3.11938 12.3931L0.853022 9.8421C-0.161664 8.69995 0.427111 6.8879 1.91935 6.5603L5.25233 5.8286C5.79689 5.70904 6.26683 5.36761 6.54881 4.88664L8.27466 1.9429Z" stroke="#FFFFFF" strokeWidth="1"/>
                </svg>
            );
        }
    }

    return (
        <div className={style.review}>
            <div className={style.review_container_top}>
                <div>
                    <span>{text1}</span>
                    <p>{text2}</p>
                </div>
                <ContactButtons />
            </div>
            <div className={style.stars}>
                {starElements}
            </div>
            <div className={style.review_content}>
                <p>{text3}</p>
            </div>
             
        </div>
    );
};

export default Review;