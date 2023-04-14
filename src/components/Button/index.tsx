import {FC} from 'react';
import {Container} from './styles'
import { Loading } from '../../pages/Home/styles'

interface ButtonProps {
text?: string; 
onClick?: any;
disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({text, onClick, disabled}) => {
    return (
        <Container type="button" onClick={onClick} disabled={disabled}>
            {disabled ? <Loading/> : null}
            {text}
        </Container>
    );
};