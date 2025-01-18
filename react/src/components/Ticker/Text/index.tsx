import style from "./style.module.css";

type SpanProps = {
    text: string;
  };

const Span: React.FC<SpanProps> = ({ text }) => {
    return (
        <span className={style.event}>{text} PHOTOGRAPHY</span>
    )
}


export default Span;