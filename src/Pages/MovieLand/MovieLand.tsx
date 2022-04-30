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
    background-color: #f0eaea;
`
const MainHeader = styled.h1`
  font-size: 3rem;
  color: #9c5411;
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
  return (
        <RootContainer>
          <ThemeSwitch />
          <MainHeader>
            {`Movie Land :)`}
          </MainHeader>
          <MainContainer>

          </MainContainer>
      </RootContainer>
  )
}
const MovieContainer = styled.div`
  
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