import React from 'react';
import Icon from './Icon';
import Span from './Text';
import style from './style.module.css';

type TickerProps = {
  texts: string[]; // Массив текстов для отображения
};

const Ticker: React.FC<TickerProps> = ({ texts }) => {
  // Объединяем массив для отображения, чтобы сделать его цикличным
  const combinedTexts = [...texts, ...texts];

  return (
    <div className={style.ticker}>
      <div className={style.tickerContent}>
        {combinedTexts.map((text, index) => (
          <div key={index} className={style.tickerItem}>
            <Icon />
            <Span text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
