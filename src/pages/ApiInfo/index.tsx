import { useEffect, useState } from "react";
import { useNavigate, redirect } from 'react-router-dom'
import { toast } from "react-toastify";

import { Container, Header, Main, Section, Form } from "./styles";

import { api } from '../../services/api';

import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";

interface  BadWordInterface{
  id: number;
  title: string;
  created_at: string;
}

export function ApiInfo() {
  const [title, setTitle] = useState('');
  const [words, setWords] = useState<BadWordInterface[]>([]);
  const [sugestions, setSugestions] = useState<BadWordInterface[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  async function handleSendSugestion(){
    if(!title){
      return toast.warn("Digite algo para poder enviar a sugestão");
    }
    setIsSending(true);
    try{
      await api.post('/sugestions', {title}).then(() => {
        setIsSending(false), 
        toast.success(`Sugestão ${title} inserida!`)
      });
    }catch(error: any){
        if(error.response){
            toast.warn("Sugestão já inclusa na lista");
            setIsSending(false);
        }else{
            toast.warn("Não foi possível registrar uma sugestão");
            setIsSending(false);
        }
    }
}

  useEffect(() => {
    async function fetchWords(){
       await api.get("/words?title=").then(({data}) => {setWords(data), setIsFetching(false)});
    }
    fetchWords();
    console.log(words);
  }, []);

  useEffect(() => {
    async function fetchSugestions(){
      await api.get("/sugestions?title=").then(({data}) => setSugestions(data));
   }
   fetchSugestions();
   console.log(sugestions);
  }, [isSending])


  return(
    <Container>

      <Header>
        <TextButton 
        onClick={() => navigate("/")} 
        text="voltar"
        />

        <h1>Informações da <span>API</span></h1>

        <TextButton 
        text="sobre" 
        link="https://github.com/Jcassio-dev/ProfanityWords-API"
        />

      </Header>

      <Main>
      {isFetching ? <h1>Buscando dados...</h1> : <h1>Catalogados</h1>}

        <div className="Sections">
          <Section>
              <h2>Palavrões</h2>
              <div>
                {words && words.map(word => (
                  <span key={String(word.id)}>"{word.title}"</span>
                ))}
              </div>
          </Section>

          <Section>
              <h2>Sugestões</h2>
              <div>
                {sugestions && sugestions.map(sugestion => (
                  <span key={String(sugestion.id)}>"{sugestion.title}"</span>
                ))}
              </div>
          </Section>
        </div>

        <Form>
            <h3>
              Achou alguma ofensa que não está aqui? <br/> 
              <span>{isSending ? 'Enviando sugestão...': 'Deixe sua sugestão'}</span>
            </h3>
                  
            <div className="inputWrapper">
            <Input 
            placeholder="Deixe sua sugestão aqui" 
            onChange={(e: any) => setTitle(e.target.value)} 
            maxLenght={15}
            />

            <Button 
            text="Enviar" 
            onClick={handleSendSugestion}
            />

            </div>
        </Form>
      </Main>

    </Container>
  )
}

