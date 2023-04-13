import { useEffect, useState } from "react";
import { useNavigate, redirect } from 'react-router-dom'
import { toast } from "react-toastify";

import { Container, Header } from "./styles";

import { api } from '../../services/api'

import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

interface  BadWordInterface{
  id: number;
  title: string;
  created_at: string;
}

export function ApiInfo() {
  const [text, setText] = useState('');
  const [words, setWords] = useState<BadWordInterface[]>([])

  const navigate = useNavigate()
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
        <TextButton onClick={() => navigate(-1)} text="voltar"/>
        <h1>Informações da <span>API</span></h1>
        <TextButton text="sobre" link="https://github.com/Jcassio-dev/ProfanityWords-API"/>
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

