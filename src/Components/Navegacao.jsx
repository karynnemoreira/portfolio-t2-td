import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Galeria from "./Galeria.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

//BrowserRouter: Sempre será o primeiro, a função dele é ser a caixa que vai englobar/envolver todo o nosso caminho (rotas).

//Routes: Dentro dessa caixa é onde começaremos a arquitetar os nossos caminhos. Determina para onde cada rota vai  
// <Routes>  
// <Route />   
// <Route />
// <Route />
// </Routes>  

//Route: <Route /> Específico para cada rota, uma Route para cada. 
//Sobre, Inicio e Projetos

//Link Quando eu clicar em um lugar específico me leve para outro lugar "dentro da minha própria página". O Link vai dentro da li.

function Navegacao() {
    return (
        <>
            <BrowserRouter>
                <S.Nav>
                    <S.Ul>
                        {/* to = para, um link para o sobre, projetos e início. Me leve para tal lugar */}

                        <li> <Link to="/"> Inicio </Link>  </li>
                        <li> <Link to="/Sobre"> Sobre </Link>   </li>
                        <li> <Link to="/Projetos"> Projetos </Link>  </li>
                        <li> <Link to="/Galeria"> Galeria </Link> </li>
                    </S.Ul>
                </S.Nav>


                <Routes>
                    {/* path = caminho: Configuração dos dois, Link="/Sobre" com Route path="Sobre" */}
                    {/* element: configura para qual component quero ir element={ativa o componente <Sobre />} */}

                    <Route path="/" element={<Inicio />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Projetos" element={<Projetos />} />
                    <Route path="Galeria" element={<Galeria />} />

                </Routes>

            </BrowserRouter>

        </>

    )
}
export default Navegacao