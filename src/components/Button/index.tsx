import {FC} from 'react';
import {Container} from './styles'


interface ButtonProps {
text?: string; 
onClick?: any;
}

export const Button: FC<ButtonProps> = ({text, onClick}) => {
    return (
        <Container onClick={onClick}>
            {text}
        </Container>
    );
};