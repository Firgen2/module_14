import { FunctionComponent } from 'react';

interface Props {
    text: string;
}

const H3: FunctionComponent<Props> = ({ text }) => {
    return <h3>{text}</h3>;
};

export default H3;