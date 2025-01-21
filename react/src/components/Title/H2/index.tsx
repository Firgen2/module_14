import { FunctionComponent } from 'react';

interface Props {
    text: string;
}

const H2: FunctionComponent<Props> = ({ text }) => {
    return <h2>{text}</h2>;
};

export default H2;