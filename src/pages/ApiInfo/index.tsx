import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container, Header } from "./styles";

import { api } from '../../services/api'

import { Button } from "../../components/Button";

interface  BadWordInterface{
  id: number;
  title: string;
  created_at: string;
}

export function ApiInfo() {
  const [text, setText] = useState('');
  const [words, setWords] = useState<BadWordInterface[]>([])

  useEffect(() => {
    async function fetchWords(){
       await api.get("/words?title=").then(({data}) => setWords(data));
    }
    fetchWords();
    console.log(words)
  }, [])

  return(
    <Container>
      <Header>
        <button>Voltar</button>
        <h1>Informações da API</h1>
        <button>Sobre</button>
     </Header>
     <h2>Palavrões catálogados até agora</h2>
     <div>
      {words && words.map(word => (
        <span key={String(word.id)}>"{word.title}"</span>
      ))}
     </div>
    </Container>
  )
}

