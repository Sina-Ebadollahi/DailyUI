import React from 'react'
import styled from 'styled-components'
import { pizzaData } from './PizzaData'


const MainContainer = styled.section`
    min-width:100vh;
    min-width:100vw;
    display: flex;
    flex-direction:column;
    
`
const IntroWrapper = styled.div`
background-color: #161515;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
`
export default function PizzaLand() {
  return (
      <MainContainer>
          <IntroWrapper>
            <IntroFunction />
          <PizzaCard />
          </IntroWrapper>
      </MainContainer>
  )
}
const BackgroundContainer = styled.div`
min-height: 60vh;
position: relative;
  background-repeat: no-repeat;
`
const BackgroundImage = styled.img`
opacity: 0.7;
width: 100%;
max-height: 60vh;
  object-fit: cover;
`
const PizzaTextContainer = styled.div`
  min-width: 20vw;
  height: 30vh;
  position: absolute;
  left: 5%;
  bottom: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  opacity: 0.8;
  border-right: 2px solid yellow;
  border-bottom: 2px solid yellow;
`
const PizzaHeader = styled.h2`
  font-size: 4.5rem;
color: white;
  text-align: center;
  line-height: 3rem;
  text-shadow: 2px 4px 2px black;
  @media screen and (max-width: 720px) {
    font-size: 3.6rem;
  }
`
const PizzaParagraph = styled.p`
margin-top: 2rem;
  font-size:1.5rem;
  color: black;
  letter-spacing: 0.8rem;
  text-shadow: 1px 2px 1px white;
  text-align: center;
`
const IntroFunction = (): JSX.Element => {

  return(
    <BackgroundContainer>
      <BackgroundImage src={pizzaData[0].img} />
      <PizzaTextContainer>
        <PizzaHeader>
          Greatest Pizza <br/> ever
        </PizzaHeader>
        <PizzaParagraph>
          You Will enjoy it!
        </PizzaParagraph>
      </PizzaTextContainer>
    </BackgroundContainer>
  )
}
// pizza reserve card
const PizzaCardContainer = styled.div`
  min-height: 40vh;
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const PizzaCardWrapper = styled.div`
  min-height: 80%;
  min-width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #dbd807;
  /* &:hover{
    padding: 8rem;
  } */
`
const PizzaCardImage = styled.img`
  object-fit: cover;
  max-width: 10vw;
  max-height: 30vh;
  border-radius: 70%;

`
const PizzaCardHeader = styled.h1`
  letter-spacing: 0.09rem;
  color: #b90606;
  font-size: 2rem;
  @media screen and (max-width: 720px) {
    line-height: 2rem;
  }
`
type PizzaWrapperType = {
  mh?: string;
  mw?: string;
  minW: string;
  minH: string;
  isFlex: boolean;
  bgImg?: string;
}
const PizzaWrapper = styled.div`
  background-image: url(${(s: PizzaWrapperType) => s.bgImg});
  max-height: ${(s: PizzaWrapperType) => s.mh};
  max-width: ${(s: PizzaWrapperType) => s.mw};
  min-height: 
  ${(s: PizzaWrapperType) => {
    if(s.isFlex){
      return`
        display: flex;
        justify-conent: center;
        align-items: center
      `
    }
  }};
  position: relative;
`
const PizzaFireImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
`





const PizzaCard = (): JSX.Element => {

  return(
    <PizzaCardContainer>
      {pizzaData.map((e, i) => {
        if(i > 0){
          return(
            <PizzaCardWrapper>
              <PizzaWrapper   minH='30vh' minW='20vw' isFlex={true} mh='30vh' mw='20vw'>
                <PizzaFireImage src='https://media.istockphoto.com/photos/fire-isolated-over-black-background-picture-id113494458?k=20&m=113494458&s=612x612&w=0&h=xwIXuOUwLSqGiOHMS-byry1NeuH99Z7GBrkfl70Sxvg=' />
              <PizzaCardHeader>{e.productName}</PizzaCardHeader>

              </PizzaWrapper>
              <PizzaCardImage src={e.img}  />
            </PizzaCardWrapper>
          )
        }
      })}
    </PizzaCardContainer>
  )
}












