import { useState } from "react"

import { Container, Info } from "./styles";

import { badWordList } from "../../utils/badWordList";

import Security from '../../assets/Security.svg'

import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";


export function Home() {
  const [text, setText] = useState('');

  const verifyText = (text: string) => {
    const formatText = text.toLowerCase();
    
    const isInclude = badWordList.some(word => formatText.includes(word));

    const response = isInclude ? alert("palavra ofensiva detectada") : alert('Não há palavras ofensivas');

    return response
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

