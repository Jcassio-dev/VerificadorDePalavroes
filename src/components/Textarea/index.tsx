import {FC} from 'react';
import {Container} from './styles'


interface TextareaProps {
placeholder?: string; 
onChange?: any;
value?: string;
}

export const Textarea: FC<TextareaProps> = ({placeholder, onChange, value}) => {
    return (
        <Container placeholder={placeholder} onChange={onChange} value={value}/>
    );
};