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
          </IntroWrapper>
          <PizzaCard />
      </MainContainer>
  )
}
const BackgroundContainer = styled.div`
height: 60vh;
position: relative;
  background-repeat: no-repeat;
`
const BackgroundImage = styled.img`
opacity: 0.7;
width: 100%;
height: 100%;
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
`
const PizzaHeader = styled.h2`
  font-size: 4.5rem;
color: white;
  text-align: center;
  line-height: 3rem;
  text-shadow: 2px 4px 2px black;
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
  min-width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover{
    padding: 8rem;
  }
`
const PizzaCardImage = styled.img`
  object-fit: fill;
  max-width: 80%;
  max-height: 40%;
  

`







const PizzaCard = (): JSX.Element => {

  return(
    <PizzaCardContainer>
      {pizzaData.map((e, i) => {
        if(i > 0){
          return(
            <PizzaCardWrapper>
              <PizzaCardImage src={e.img}  />
            </PizzaCardWrapper>
          )
        }
      })}
    </PizzaCardContainer>
  )
}












