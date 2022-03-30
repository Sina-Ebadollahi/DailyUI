import { Button } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const offersData = [
  {
    productID: 0,
    texts: [
      'https://www.zilliondesigns.com/images/portfolio/telecommunication-networking-company/untitled-1_29-01.png',
      'Ice Mobile 10GB',
      'Up to 100Mbit/s',
      '299,-',
      '/month',
    ]
  },
  {
    productID: 1,
    texts: [
      '',
      'Telia Mobil 15GB',
      'Unlimited Calls, SMS and MMS',
      '953,-',
      '/month',
    ]
  },
  {
    productID: 2,
    texts: [
      '',
      'Telenor Next Fast',
      'Up to 100Mbit/s',
      '1028,-',
      '/month',
    ]
  },
]
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
const OfferContainer = styled.div`
  min-width: 20vw;
  min-height: 25vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
type OfferDetailsContainerType = {
  flex: boolean;
  jc?: string;
  ali?: string;
  als?: string;
  fDirection?: string;
}
const OfferDetailsContainer = styled.div`
  flex: 1;
  display: ${(s: OfferDetailsContainerType) => s.flex ? 'flex' : 'block'};
  flex-direction: ${(s: OfferDetailsContainerType) => s.fDirection ? s.fDirection : 'row'};
  justify-content: ${(s: OfferDetailsContainerType) => s.jc};
  align-items: ${(s:OfferDetailsContainerType) => s.ali};
  align-self: ${(s: OfferDetailsContainerType) => s.als};
`
const OfferImg = styled.img`
  object-fit: cover;
  max-width: 15vw;
  max-height: 10vh;
`
const OfferHeader = styled.h1`
  font-size: 1.5rem;
  color: black;
`
const OfferP = styled.p`
  font-size: 0.8rem;
`
const EachOffer = ({texts, nav, productID}: {texts: string[], nav: NavigateFunction, productID: number}) => {

  return(
    <OfferContainer>
      <OfferDetailsContainer flex={true}>
        <OfferImg src={texts[0]} alt={texts.slice(0, 5) + 'image'} />
      </OfferDetailsContainer>
      <OfferDetailsContainer fDirection='column' flex={true}>
        <OfferHeader>
          {texts[1]}
        </OfferHeader>
        <OfferP>
          {texts[2]}
        </OfferP>
      </OfferDetailsContainer>
      <OfferDetailsContainer flex={true}>
        <OfferHeader>
          {texts[3]}
        </OfferHeader>
        <OfferP>
          {texts[4]}
        </OfferP>
      </OfferDetailsContainer>
      <OfferDetailsContainer flex={true}>
        <Button variant='contained' onClick={(e) => nav(`/Daily2/${productID}`)}>Add Subscription</Button>
      </OfferDetailsContainer>
    </OfferContainer>
  )
}
export default function Daily2() {
    const nav = useNavigate();
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
          <OfferWrapper bShadowColor='#FFFBEC'><EachOffer nav={nav} texts={offersData[0].texts} productID={offersData[0].productID} key={offersData[0].productID} /></OfferWrapper>
          <OfferWrapper bShadowColor='#f1d9fc'><EachOffer nav={nav} texts={offersData[1].texts} productID={offersData[1].productID} key={offersData[1].productID} /></OfferWrapper>
          <OfferWrapper bShadowColor='#c5caf8'><EachOffer nav={nav} texts={offersData[2].texts} productID={offersData[2].productID} key={offersData[2].productID} /></OfferWrapper>
        </SplitterDiv>
        <SplitterDiv fDirection='row' flex={1}></SplitterDiv>
      </ContentWrapper>
    </MainSectionDaily2>
  )
}
