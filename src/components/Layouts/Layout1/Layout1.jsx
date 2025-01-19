import React from 'react'
import RenderTopfold from './Topfold/RenderTopfold'
import RenderSectionA from './SectionA/RenderSectionA'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  color:{
    light: "#EEEEEE",
    main: "#00ADB5",
    lightDark: "#393E46",
    dark: "#222831"
  }
}

const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Poppins",Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: ${theme.color.dark}
  }
  body{
    background: #EEEEEE;
  }
  h2, h3, h4, h5, h6{
    line-height: 135%;
    font-weight: 600;
  }
  h2{
    font-size: 2.6rem;
  }
  h3, h4{
    font-size: 1.6rem;
  }
  h5, h6{
    font-size: 1.4rem;
  }
  p{
    font-size: 1.2rem;
    line-height: 145%;
  }
  button{
    font-size: 1.2rem;
  }

`

const Layout1 = () => {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle/>
        <RenderTopfold/>
        <RenderSectionA/>
      </ThemeProvider>
    </>
  )
}

export default Layout1
