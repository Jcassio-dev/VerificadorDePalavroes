import {FC} from 'react';
import {Container} from './styles'


interface ButtonProps {
text?: string; 
onClick?: any;
disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({text, onClick, disabled}) => {
    return (
        <Container type="button" onClick={onClick} disabled={disabled}>
            {text}
        </Container>
    );
};