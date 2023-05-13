import React, { useState } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
 
const [tema,setTema] = useState(true)

const toggleTema = () =>{
   setTema((tema) => !tema)
   
 
 
}
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}> 
    {/* Se pone el theme provider abarcando todos los componentes para que estén los estilos al alcance de todos los componentes hijos */}
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
