import React from "react"
import Cao from "./imagensPorfolio/cao.png"
import Cartoon from "./imagensPorfolio/cartoon.png"
import Cruzeiro from "./imagensPorfolio/cruzeiro.png"
import Fogo from "./imagensPorfolio/fogo.png"
import Patrocinadores from "./imagensPorfolio/patrocinadores.png"
import * as S from "./Style"
import Carousel from "nuka-carousel";



function Projetos() {

    const desafios = [
        { imagem: Cao, titulo: "Fantastika", link: "https://www.outback.com.br/", descricao: "html, css, responsivo" },
        { imagem: Cartoon, titulo: "Cartoon Network", link: "https://www.outback.com.br/", descricao: "react, map, styled-components, useState, useEffect, filter" },
        { imagem: Cruzeiro, titulo: "Cruzeiro do Roberto Carlos", link: "https://www.outback.com.br/", descricao: "Lógica - JS" },
        { imagem: Fogo, titulo: "The Witcher", link: "https://www.outback.com.br/", descricao: "html, css, position" },
        { imagem: Patrocinadores, titulo: "Patrocinadores", link: "https://www.outback.com.br/", descricao: "DOM, useEffect, useState" }
    ]

    const Carrosel = {
        width: "99vw",
        height: "80vh",
        backgroundColor: "black",
      };

      const params = {
        wrapAround: true,
        animation: 'zoom',
        slidesToShow: 1, //de 3 em 3 imagens
        style: Carrosel,
        autoplay: true, //passar sozinho
        autoplayInterval: 3000, //passar de 3 em 3 seguntos automático
        cellAlign: 'left',
        swiping: true, //arrastar o carousel,
        zoomScale: 0.85,
        className: 'teste',
    
        defaultControlsConfig: {
    
          nextButtonText: '»',
          nextButtonStyle: {
            //position:"relative",
            // top:"-6.5vh",
            marginRight: '3.8vw',
            // color: "#ffffff",
            color: 'red',
            fontSize: '192px',
            backgroundColor: 'transparent',
            width: '2vw',
            // height: '8vh',
            fontFamily: "Inconsolata",
          },
    
          prevButtonText: '«',
          prevButtonStyle: {
            // position: "relative",
            // top:"-6.5vh",
            // color: "#ffffff",
            color: 'red',
            fontSize: '192px',
            backgroundColor: 'transparent',
            width: '2vw',
            // height: '8vh', 
            fontFamily: "Inconsolata",
            Dots: "red",
            
          },
        }
    
      }

    return (
        
<>
<Carousel {...params}>

{desafios.map((item) => (
                <div>
                    <a href={item.link} target="_blank">  <img src={item.imagem} alt={item.titulo} />   </a>
                    <h2>{item.titulo}</h2>
                    <h3>{item.descricao}</h3>
                </div>
            ))}
                  </Carousel>

    </>

    )
}

export default Projetos