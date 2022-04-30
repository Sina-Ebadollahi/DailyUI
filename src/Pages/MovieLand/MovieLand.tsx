import { useSelector } from "react-redux"
import styled from "styled-components"
import ThemeSwitch from "./ThemeSwitch"


// components
const RootContainer = styled.section`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(a: {c: string}) => a.c === 'Light' ? '#f0eaea': '#504e4e'};;
`
const MainHeader = styled.h1`
 color: ${(a: {c: string}) => a.c === 'Light' ? 'red': 'white'};
  font-size: 3rem;
  /* color: #9c5411; */
  letter-spacing: 0.5rem;
  justify-self: flex-start;
  margin-bottom: 10rem;
`
const MainContainer = styled.div`
    min-height: 50vh;
    min-width: 70vw;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.5);
`
export default function MovieLand() {
  const currentTheme: string = useSelector((state: {themeReducer: any, locationReducer: any}) => state.themeReducer);
  console.log(currentTheme);
  
  return (
        <RootContainer c={currentTheme}>
          <ThemeSwitch jSelf={'flex-start'} />
          <MainHeader c={currentTheme}>
            {`Movie Land :)`}
          </MainHeader>
          <MainContainer>

          </MainContainer>
      </RootContainer>
  )
}
const MovieRootContainer = styled.div`
  min-height:20vh;
  min-width: 65vw;
  margin: auto;
  display: grid;
  grid-template-columns:repeat(3,1fr);
  grid-gap:2rem;
`
const MovieContainer = styled.div`
  min-width: 20vw;
  min-height: 15vh;

`

type MovieBaseContainerType = {
  imgUrl: string | null;
  fullTitle: string | null;
  id: string | null;
  genres: string[] | null;
} 
const MovieBaseContainer = (): JSX.Element => {
  return(
    <>

    </>
  )
}