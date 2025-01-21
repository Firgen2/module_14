import React, { useRef, useLayoutEffect, useState } from 'react';
import Icon from './Icon';
import Span from './Text';
import style from './style.module.css';

type TickerProps = {
  texts: string[];
  baseSpeed?: number; // Опциональный параметр для настройки базовой скорости
};

const Ticker: React.FC<TickerProps> = ({ texts, baseSpeed = 10 }) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(10);

  useLayoutEffect(() => {
    if (tickerRef.current) {
      const contentWidth = tickerRef.current.scrollWidth;
      const containerWidth = tickerRef.current.offsetWidth;
      
      const duration = (contentWidth / containerWidth) * baseSpeed;
      setAnimationDuration(duration);
    }
  }, [texts, tickerRef.current?.offsetWidth, baseSpeed]);

  return (
    <div className={style.ticker} ref={tickerRef}>
      <div className={style.tickerContent}>
        {/* Первый блок */}
        <div className={style.block} style={{ animationDuration: `${animationDuration}s` }}>
          {texts.map((text, index) => (
            <div key={index} className={style.tickerItem}>
              <Icon />
              <Span text={text} />
            </div>
          ))}
        </div>
        
        {/* Второй блок (копия) */}
        <div className={style.block} style={{ animationDuration: `${animationDuration}s` }}>
          {texts.map((text, index) => (
            <div key={`${index}-copy`} className={style.tickerItem}>
              <Icon />
              <Span text={text} />
            </div>
          ))}
        </div>

        {/* Третий блок (копия) */}
        <div className={style.block} style={{ animationDuration: `${animationDuration}s` }}>
          {texts.map((text, index) => (
            <div key={`${index}-copy-2`} className={style.tickerItem}>
              <Icon />
              <Span text={text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
