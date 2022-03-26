import React from 'react'
import styled from 'styled-components';
const MainSectionDaily2 = styled.section`
  background-color: rgb(252, 250, 250);
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentWrapper = styled.div`
  min-height: 75vh;
  min-width: 85vw;
  background-color: rgb(235, 235, 247);
  box-shadow: 0 4px 4px rgb(210, 210, 243);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 720px) {
    
  }
`
type SplitterDivTypes = {
  flex: number,
  fDirection: string,
  jContent?: string,
  fWrap?: string,
}
const SplitterDiv = styled.div`
  flex: ${(s: SplitterDivTypes) => s.flex};
  display: flex;
  flex-direction: ${(s: SplitterDivTypes) => s.fDirection};
  justify-content: ${(s: SplitterDivTypes) => s.jContent ? s.jContent : 'center'};
  align-items: center;
  flex-wrap: ${(s: SplitterDivTypes) => s.fWrap};
  

`
const TheHeader = styled.h1`
  font-size: 2.4rem;
  color: rgb(17, 17, 97);
  text-align: center;
`
const TheParagraph = styled.p`
  font-size: 1rem;
  text-align: center;
`
type offerWrapperType = {
  bShadowColor: string,
}
const OfferWrapper = styled.div`
  flex: 1 1 30rem;
  min-width: 25vw;
  max-width: 70vw;
  min-height: 30vh;
  max-height: 30vh;
  margin: auto;
  border-radius: 20px;
  background-color: white;
  box-shadow: -20px -20px 5px ${(s: offerWrapperType) => s.bShadowColor ? s.bShadowColor : 'black'};
  margin: 2rem;
  @media screen and (max-width: 720px) {
    min-width: 60vw;
  }
`
export default function Daily2() {
    
  return (
    <MainSectionDaily2>
      <ContentWrapper>
        <SplitterDiv jContent='space-evenly' fDirection='column' flex={2}>
          <TheHeader>
            Get the most out of your mobile<br />
            with the right subscription
          </TheHeader>
          <TheParagraph>
            All devices come with free delivery or pickup as standard, See information on<br />
            available shopping options for your location.
          </TheParagraph>
        </SplitterDiv>
        <SplitterDiv fWrap='wrap' jContent='space-evenly' fDirection='row' flex={2}>
          <OfferWrapper bShadowColor='#FFFBEC'>3</OfferWrapper>
          <OfferWrapper bShadowColor='#f1d9fc'>3</OfferWrapper>
          <OfferWrapper bShadowColor='#c5caf8'>3</OfferWrapper>
        </SplitterDiv>
        <SplitterDiv fDirection='row' flex={1}></SplitterDiv>
      </ContentWrapper>
    </MainSectionDaily2>
  )
}
