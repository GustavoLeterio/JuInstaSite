import styled from 'styled-components'
import db from "../db.json";

const Grid = styled.div`
  display:grid;
  place-items:center;
  text-align:center;
  width:100vw;
  animation: slidein .5s ease-in;
  @keyframes slidein {
    from{
      opacity:0;
    }
    to{
      opacity:1;
    }
  }
`
const LogoImage = styled.img`
  height:50vh;
  margin:20px 0 20px 0;
`
const A = styled.a`
  font-family:arial;
  text-decoration:none;
  font-size:30px;
  color:black;
  padding:20px;
  width:40vw;
  border-radius:15px;
  background-color:white;
  margin:0 0 30px 0; 
  @media screen and (max-width: 1024px){
    width:60vw;
    font-size:40px;
    padding:25px;
  }
  @media screen and (max-width: 640px){
    width:80vw;
    padding:20px;
    font-size:30px;
  }
  @media screen and (max-width: 240px){
    width:50vw;
    margin:0 0 10px 0; 
    padding:10px;
    font-size:20px;
  }
`

export default function Home() {
  return (
    <Grid>
      <LogoImage src="https://i.pinimg.com/originals/ec/81/fa/ec81fa8c40917e11e9653baa02986f36.png"/>
      <A href="https://web.whatsapp.com/send?phone=5543998315030">
        Contato
      </A>
      <A href="google.com">
        Cardápio
      </A>
    </Grid>
  )
}
