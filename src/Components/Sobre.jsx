import React from "react"
import Vnw from "./imagensPorfolio/vnw.png"
import Css from "./imagensPorfolio/css.png"
import Js from "./imagensPorfolio/js.png"
import Html from "./imagensPorfolio/html.png"
import Mic from "./imagensPorfolio/mic.png"
import * as S from "./Style.jsx"

function Sobre() {
    return (
        <S.Sobre>

            <S.Estudos>
                <h2> ESTUDOS</h2>

                <div>
                    <h2>Desenvolvimento front-end</h2>
                    <h3>AGO/2023 - MAIO/2024</h3>
                </div>

                <img src={Vnw} alt="logo do vai na web" />
            </S.Estudos>

            <S.Habilidades>
                <h2> HABILIDADES</h2>

                <div>
                    <img src={Css} alt="logo do css" />
                    <h3>CSS</h3>
                </div>

                <div>
                    <img src={Js} alt="logo do javascript" />
                    <h3>Javascript</h3>
                </div>

                <div>
                    <img src={Html} alt="logo do html5" />
                    <h3>HTML</h3>
                </div>

            </S.Habilidades>

            <S.Profissional>
                <h2> PROFISSIONAL</h2>
                <div>
                    <h2> Cantora, compositora, produtora musical e atriz</h2>
                    <img src={Mic} alt="logo de um microfone" />
                </div>

            </S.Profissional>

        </S.Sobre>
    )
}

export default Sobre