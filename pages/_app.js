import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #EDB575;
    overflow-x:hidden;
    animation: slidein .5s ease-in;
  @keyframes slidein {
    from{
      opacity:0;
    }
    to{
      opacity:1;
    }
  }
  }
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
