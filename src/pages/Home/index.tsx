import { useState } from "react";
import { toast } from "react-toastify";

import { Container, Info } from "./styles";

import { badWordList } from "../../utils/badWordList";

import Security from '../../assets/Security.svg';

import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";


export function Home() {
  const [text, setText] = useState('');

  const verifyText = (text: string) => {
    const badWords: string[] = [];

    let formatText = text.toLowerCase();
    
    const isInclude = badWordList.some(word => {
      if(formatText.includes(word)){
        badWords.push(word)
      }   
    });

    const censureBadWords = badWords.map(word => {
      formatText = formatText.replace(word, '*'.repeat(word.length))
      setText(formatText)
    })

    const response = badWords.length > 0 ? toast.error(`Conteúdo Impróprio: ${badWords}`) : toast.success('Texto seguro!');
   
  }

  return(
    <Container>
      <div>
        <img src={Security} alt="Rapaz mexendo no computador com cadeados e símbolos que exprimem segurança" />
      <Info>
        <h1>filtro de palavras <span>ofensivas</span></h1>
        <Textarea value={text} onChange={(e: any) => setText(e.target.value)} placeholder="Digite seu texto aqui"/>
        <Button onClick={() => verifyText(text)} text="Verificar texto"/>
      </Info>
    </div>
    </Container>
  )
}

