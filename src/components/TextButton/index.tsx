import {FC} from 'react';
import {Container} from './styles'


interface TextButtonProps {
text?: string; 
onClick?: any;
link?: string;
}

export const TextButton: FC<TextButtonProps> = ({text, onClick, link}) => {
    return (
        <Container onClick={onClick}>
            <a href={link} target='_blank'>
            {text}
            </a>
        </Container>
    );
};