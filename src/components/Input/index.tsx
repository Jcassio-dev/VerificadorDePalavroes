import {FC} from 'react';
import {Container} from './styles'

interface InputProps {
placeholder?: string; 
onChange?: any;
}

export const Input: FC<InputProps> = ({placeholder, onChange}) => {
    return (
        <Container placeholder={placeholder} onChange={onChange}/>
    );
};