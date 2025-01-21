import { FunctionComponent } from 'react';

interface Props {
    text: string;
}

const H4: FunctionComponent<Props> = ({ text }) => {
    return <h4>{text}</h4>;
};

export default H4;