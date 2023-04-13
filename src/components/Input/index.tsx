import {FC} from 'react';
import {Container} from './styles'

interface InputProps {
placeholder?: string; 
onChange?: any;
maxLenght?: number;
}

export const Input: FC<InputProps> = ({placeholder, onChange, maxLenght}) => {
    return (
        <Container placeholder={placeholder} onChange={onChange} maxLength={maxLenght}/>
    );
};