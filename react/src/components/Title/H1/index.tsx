import { FunctionComponent } from 'react';

interface Props {
    text: string;
}

const H1: FunctionComponent<Props> = ({ text }) => {
    return <h1>{text}</h1>;
};

export default H1;