import { useState } from "react"
import { badWordList } from "./utils/ofensas";


export function App() {
  const [text, setText] = useState('');

  const verifyText = (text: string) => {
    const formatText = text.toLowerCase();
    
    const isInclude = badWordList.some(word => formatText.includes(word));

    const response = isInclude ? alert("palavra ofensiva detectada") : alert('Não há palavras ofensivas');

    return response
  }

  return(
    <>
    <h1>Segurança Online</h1>
    <h2>filtro de palavras ofensivas</h2>

    <textarea value={text} onChange={(e: any) => setText(e.target.value)}/>
    <button onClick={() => verifyText(text)}>Checar</button>
    </>
  )
}

export default App
