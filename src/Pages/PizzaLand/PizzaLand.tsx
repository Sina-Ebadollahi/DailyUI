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
      </MainContainer>
  )
}
const BackgroundContainer = styled.div`
  background-image: url(${(s: {imgSrc: string}) => s.imgSrc});
  background-repeat: no-repeat;
`
const IntroFunction = (): JSX.Element => {

  return(
    <BackgroundContainer imgSrc='../../../assets/images/866645.jpg'>

    </BackgroundContainer>
  )
}