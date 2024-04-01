import React from 'react'
import Imagem from "./imagensPorfolio/perfil.png"
import * as S from "./Style.jsx"

function Galeria(){
    return(
        <S.Fotos>
       <img src={Imagem} alt="" />
       <img src={Imagem} alt="" />
       <img src={Imagem} alt="" />
       <img src={Imagem} alt="" />
       <img src={Imagem} alt="" />
       <img src={Imagem} alt="" />
       <img src={Imagem} alt="" />
       <img src={Imagem} alt="" />
        </S.Fotos>
    )
}

export default Galeria