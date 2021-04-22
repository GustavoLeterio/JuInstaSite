import styled from 'styled-components'
import db from "../db.json";

const Grid = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
color:#2E1700;
display: grid;
grid-template-columns: 0.77fr 3.23fr;
margin:15px;
@media screen and (max-width: 1280px){
grid-template-columns: 1.1fr 2.9fr;
}
@media screen and (max-width: 1024px){
grid-template-columns: 1.65fr 2.35fr;
margin:30px;
}
@media screen and (max-width: 768px){
grid-template-columns: 2.7fr 1.3fr;
margin:15px;
}
@media screen and (max-width: 640px){
  grid-template-columns: 4fr;
  margin: 10px 10px 10px 5px;
}
`
const ImageWrapper = styled.nav`
@media screen and (max-width: 640px){
  display:none;
}
`
const Image = styled.img`
width:100%;
margin: 0 0 10px 0; 
@media screen and (max-width: 640px){
  display:none;
}
`
const Main = styled.main`
font-family: 'Comfortaa', cursive;
margin-bottom:20px;
@media screen and (max-width: 640px){
  max-width:100vw;
}
`
const BlockWrapper = styled.div`
padding:0 0 5vh 0;
margin:0 1.5vw 3vh 1.5vw;
border: 5px solid white;
border-radius: 2px;
@media screen and (max-width: 1024px){
  margin:0 0 3vh 2vw;
}
@media screen and (max-width: 768px){
  margin:0 0 3vh 2vw;
}
@media screen and (max-width: 640px){
  border: 2px solid white;
}
`
const P = styled.p`
text-align:center;
line-height:25px;
font-size:20px;
padding-top:20px;
@media screen and (max-width: 768px){
  font-size:16px;
  margin:0;
  padding:0;
}
@media screen and (max-width: 640px){
  font-size:15px;
}
`
const H1 = styled.h1`
text-align:center;
display:grid;
place-items:center;
color:white;
height:20vh;
margin:50px;
font-size:60px;
@media screen and (max-width: 1024px){
  margin:40px;
  height:15vh;
}
@media screen and (max-width: 640px){
  font-size:35px;
  margin:3vh 0 5vh 0;
}
`

const Block = styled.div`

`
const Title = styled.h1`
margin:5vh 0 0 5vw;
letter-spacing: 2px;
font-size:45px;
font-family: 'Bebas Neue', cursive;
@media screen and (max-width: 1280px){
  font-size:40px;
}
@media screen and (max-width: 768px){
  font-size:35px;
}
@media screen and (max-width: 640px){
  font-size:30px;
}
`
const Span = styled.span`
margin:5vh 0 0 5vw;
font-weight: 200;
letter-spacing: 1px;
float:right;
margin:0 5vw 0 0;
`
const Description = styled.p`
margin:0 0 2vh 5vw;
@media screen and (max-width: 640px){
  font-size:15px;
}
`
const Li = styled.p`
margin:1vh 0 0 7vw;
font-size:20px;
@media screen and (max-width: 1280px){
  font-size:20px;
}
@media screen and (max-width: 768px){
  font-size:17px;
}
@media screen and (max-width: 640px){
  font-size:15px;
}
`
const Warning = styled.p`
margin:0 0 0 5vw;
font-family: 'Bebas Neue', cursive;
font-size:30px;
letter-spacing:2px;
@media screen and (max-width: 1280px){
  font-size:25px;
}
@media screen and (max-width: 768px){
  font-size:22px;
}
@media screen and (max-width: 640px){
  font-size:15px;
  text-align:center;
  margin:0;
}
`
const Div = styled.div`
position:absolute;
width:100vw;
height:30vh;
background-color:#a1703b;
z-index:-100;

@media screen and (max-width: 1024px){
  height:20vh;
}
`
const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  color:black;
  font-weight:700;
  font-family:"Comfortaa",cursive;
`
const WppButton = styled.div`
  width:20vw;
  padding:10px;
  border-radius:20px;
  background-color:white;
  position:absolute;
  transform:translateX(45vw);
  img{
    margin-right:20px;
    width:3vw;
  }
  @media screen and (max-width: 1280px){
  transform:translateX(45vw);
}
@media screen and (max-width: 1024px){
  transform:translate(17.5vw,6vh);
  img{
    margin-right:20px;
    width:5vw;
  }
}
@media screen and (max-width: 768px){
  transform:translate(-32.5vw,-5vh);
  width:25vw;
  img{
    margin-right:20px;
    width:7vw;
  }
}
@media screen and (max-width: 640px){
  transform:translate(25vw,6vh);
  width:40vw;
}
@media screen and (max-width: 360px){
  transform:translate(25vw,8vh);
  width:40vw;
}
`
const Gambiarra = styled.div`
  width:20vw;
  padding:10px;
  border-radius:20px;
  background-color:transparent;
  position:absolute;
  transform:translateX(45vw);
  img{
    margin-right:20px;
    width:3vw;
  }
  @media screen and (max-width: 1280px){
  transform:translateX(45vw);
}
@media screen and (max-width: 1024px){
  transform:translate(17.5vw,6vh);
  img{
    margin-right:20px;
    width:5vw;
  }
}
@media screen and (max-width: 768px){
  transform:translate(-32.5vw,-5vh);
  width:25vw;
  img{
    margin-right:20px;
    width:7vw;
  }
}
@media screen and (max-width: 640px){
  transform:translate(25vw,6vh);
  width:40vw;
}
@media screen and (max-width: 360px){
  transform:translate(25vw,8vh);
  width:40vw;
}
`
export default function Home() {
  return (
    <Div>
      <Grid>
        <ImageWrapper>
          <Image src="https://i.pinimg.com/originals/f3/0a/f2/f30af2efb6d2b511919f779b3adf6f76.png" />
          <Image src="https://i.pinimg.com/originals/ad/b4/4d/adb44d9c8fff1283c33d59b4022c5a19.png" />
          <Image src="https://i.pinimg.com/originals/aa/6f/42/aa6f42855ce6a1d0eeb1401ab007ac45.png" />
          <Image src="https://i.pinimg.com/originals/20/c7/fb/20c7fb5ac9c6dedf64e8cd6614148f13.png" />
          <Image src="https://i.pinimg.com/originals/34/e3/25/34e325625e27eeef8e237a63101d434c.png" />
        </ImageWrapper>
        <Main>
          <BlockWrapper>
            <H1>Chocolates</H1>
            <P>LIVRES DE: AÇÚCAR, LEITE E DERIVADOS, GLÚTEN, SOJA - CONSERVANTES, CORANTES, AROMATIZANTES ARTIFICIAIS.</P>
            <Block>
              <Title>Barrinhas Sólidas<Span>R$ 4,00</Span></Title>
              <Description>EM MÉDIA 25G</Description>
              <Li>AO LEITE DE COCO</Li>
              <Li>MEIO AMARGO</Li>
              <Li>MEIO AMARGO CROCANTE</Li>
              <Li>AMARGO 70% CACAU CROCANTE</Li>
              <Li>AMARGO 70% CACAU COM CAFÉ</Li>
            </Block>
            <Block>
              <Title>Barras Sólidas<Span>R$ 15,00</Span></Title>
              <Description>EM MÉDIA 65G</Description>
              <Li>MEIO AMARGO COM CASTANHA</Li>
              <Li>MEIO AMARGO CROCANTE</Li>
              <Li>AMARGO 70% CACAU CROCANTE</Li>
              <Li>AMARGO 70% CACAU COM CASTANHA</Li>
            </Block>
            <Block>
              <Title>Barra Recheada<Span>R$ 25,00</Span></Title>
              <Description>EM MÉDIA 180G</Description>
              <Li>BRIGADEIRO</Li>
              <Li>BRIGADEIRO COM MENTA</Li>
              <Li>PAÇOCA</Li>
            </Block>
            <Block>
              <Title>Barra Recheada<Span>R$ 25,00</Span></Title>
              <Description>COM 6 UNIDADES</Description>
              <Li>AO LEITE DE COCO</Li>
              <Li>MEIO AMARGO</Li>
              <Li>MEIO AMARGO CROCANTE</Li>
              <Li>AMARGO 70% CACAU CROCANTE</Li>
              <Li>AMARGO 70% CACAU COM CAFÉ</Li>
            </Block>
            <Block>
              <Title>Barra Recheada<Span>R$ 30,00</Span></Title>
              <Description>COM 6 UNIDADES</Description>
              <Li>BRIGADEIRO</Li>
              <Li>BRIGADEIRO COM MENTA</Li>
              <Li>PAÇOCA</Li>
            </Block>
          </BlockWrapper>
          <WppButton>
            <Link href="https://api.whatsapp.com/send?phone=5543998315030">
              <img src="https://i.pinimg.com/originals/5d/e2/12/5de212c0138283d00be5e8e9d789c39e.png" />WHATSAPP
            </Link>
          </WppButton>
          <Warning>* CONSULTAR DISPONIBILIDADE PRONTA ENTREGA</Warning>
          <Warning>* FAZEMOS PERSONALIZAÇÃO PARA COMEMORAÇÕES</Warning>
          <Gambiarra>
          </Gambiarra>
        </Main>
      </Grid>
    </Div>
  )
}
