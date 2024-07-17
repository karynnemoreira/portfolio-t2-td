import styled from "styled-components"

//----Estilização da Navegação

export const Nav = styled.nav`
background-color: black;
font-family: "Calligraffitti", cursive;
`

export const Ul = styled.ul`
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;

a{
font-size: 1.5rem;
text-decoration: none;
color: white;
}

a:hover{
    color: gold;
    font-size: 2rem;
}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    border: solid red;

    a{
        font-size: 2rem;
    }
}


`

//----Estilização do Início

export const SectionInicio = styled.section`
 height:80vh ; 
display: flex;
justify-content: space-evenly;
align-items: center;
/* padding: 3rem; */
background-color: black;

img{
    border-radius: 50% ;
}

h2{
    color: white;
}

@media(min-width: 320px) and (max-width: 768px){
border: solid green; 
display: flex;
flex-direction: column;   

img{
    width: 50vw;
}

}

`

export const ContainerDivs = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height:40vh; 

@media(min-width: 320px) and (max-width: 768px){

h2{
    text-align: center;
    font-size: 2rem;
}

    img{
        width: 20vw;
    }
}
`


export const BoxInicio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`


export const BoxInicio2 = styled.div`
display: flex;
justify-content: space-evenly;
`

//----Estilização do Sobre

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;
`


export const Estudos = styled.section`
width: 30vw;
height: 50vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
border: solid red;

`


export const Habilidades = styled.section`
width: 30vw;
border: solid red;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;


div{
    display: flex;
    align-items: center;
}

img{
    width: ;
    height: 8vh;
}

`

export const Profissional = styled.section`
width: 30vw;
border: solid red;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background-image: url("https://super.abril.com.br/wp-content/uploads/2019/02/musica-site.png?crop=1&resize=1212,909");
background-size: cover ;
background-size: no-repeat;


div{
    display: flex;
    align-items: center;
}


h2{
    text-align: center;
}

`


//---------galeria

export const Fotos = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;

img{
    margin: 0.5rem;
}

`

//----------CAROUSEL 
export const CaixaCarrosel = styled.section`
  display: flex;
  justify-content: space-evenly;
  `
  export const CardProjetos = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  /* border: solid purple; */

  h2,h3{
    color: white;
  }

`  