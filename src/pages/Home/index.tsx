import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container, Info } from "./styles";

import { api } from '../../services/api'

import { badWordList } from "../../utils/badWordList";

import Security from '../../assets/Security.svg';

import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

interface  BadWordInterface{
  id: number;
  title: string;
  created_at: string;
}

export function Home() {
  const [text, setText] = useState('');
  const [words, setWords] = useState<BadWordInterface[]>([])

  const verifyText = (text: string) => {
    const badWords: string[] = [];

    let formatText = text.toLowerCase();
    
    const isInclude = words.some(word => {
      if(formatText.includes(word.title)){
        badWords.push(word.title)
      }   
    });

    const censureBadWords = badWords.map(word => {
      formatText = formatText.replaceAll(word, '*'.repeat(word.length))
      setText(formatText)
    })

    const response = badWords.length > 0 ? toast.error(`Conteúdo Impróprio: ${badWords}`) : toast.success('Texto seguro!');
   
  }

  useEffect(() => {
    async function fetchWords(){
       await api.get("/words?title=").then(({data}) => setWords(data));
    }
    fetchWords();
    console.log(words)
  }, [])

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

