import React from "react"
import Perfil from "./imagensPorfolio/perfil.png"
import Instagram from "./imagensPorfolio/instagram.png"
import Facebook from "./imagensPorfolio/facebook.png"
import Linkedin from "./imagensPorfolio/linkedin.png"
import * as S from "./Style.jsx"

function Inicio() {
    return (

        <S.SectionInicio>
            <img src={Perfil} alt="Foto do perfil" />

            <S.ContainerDivs> 
                <S.BoxInicio>
                    <h2> Olá! Sou a Mariah,</h2>
                    <h2>Venham cantarolar pelo meu portfólio.</h2>
                </S.BoxInicio>
                <S.BoxInicio2>
                    <img src={Instagram} alt="logo do instagram" />
                    <img src={Facebook} alt="logo do facebook" />
                    <img src={Linkedin} alt="logo do linkedin" />
                </S.BoxInicio2>
            </S.ContainerDivs>

        </S.SectionInicio>
    )
}

export default Inicio