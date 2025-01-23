import { useRef, useState } from 'react';
import style from './style.module.css';

interface Props {
    text1: string;
    text2?: string;
}

const Answer: React.FC<Props> = ({ text1, text2 }) => {
    const contentRef = useRef<HTMLParagraphElement>(null); // Ссылка на элемент <p>
    const [contentHeight, setContentHeight] = useState('0'); // Высота содержимого
    const [isOpen, setIsOpen] = useState(false); // Начальное состояние - закрыто

    const toggleAnswer = () => {
        if (!contentRef.current) return;
        
        // Вычисляем реальную высоту содержимого
        const scrollHeight = contentRef.current.scrollHeight + 'px'; 
        setContentHeight(isOpen ? '0' : scrollHeight);
        setIsOpen(!isOpen); // Изменяем состояние
    };

    return (
        <div className={style.answer_container}>
            <div className={style.answer_container_text}>
                <span>{text1}</span><br />
                {/* Добавляем ссылку на элемент и управляем высотой */}
                <p
                    ref={contentRef}
                    style={{
                        maxHeight: contentHeight,
                        marginTop: isOpen ? '30px' : '0', // Добавляем margin-top при открытии
                    }}
                >
                    {text2}
                </p>
            </div>
            <button onClick={toggleAnswer}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                >
                    {/* Меняем путь SVG в зависимости от состояния isOpen */}
                    <path
                        d={isOpen ? 'M1.5 8L7.5 2L13.5 8' : 'M13.5 1L7.5 7L1.5 1'} // Стрелка вниз по умолчанию
                        stroke="#CACACE"
                        strokeWidth="2"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Answer;