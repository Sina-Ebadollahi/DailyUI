import { Avatar } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
// auth container imports 
import { LockOutlined, VisibilityOutlined, VisibilityOffOutlined  } from "@material-ui/icons";
// customs
const primaryColor = '#132B50';
type CustomDivType = {
    d?:string | null;
    jSelf?: string | null;
    jContent?: string | null;
    aItems?: string | null;
    w?: string | null;
    h?: string | null;
    fDirection?: string | null;
    margin?: number[] | null;
}
const CustomDiv = styled.div`
    display: ${(s: CustomDivType) => s.d};
    justify-self: ${(s: CustomDivType) => s.jSelf};
    justify-content: ${(s: CustomDivType) => s.jContent};
    align-items: ${(s: CustomDivType) => s.aItems};
    width: ${(s: CustomDivType) => s.w};
    height: ${(s: CustomDivType) => s.h};
    margin: ${(s: CustomDivType) => s.margin?.map((e: number) => (`${e}px `))};
`

// components
const Daily3Section = styled.section`
    background-color: #919AAB;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
type DivType = {
    mh: string | null;
    mw: string | null;
    bgColor: string | null;
    bRadius?: number | null;
    
}
const MainDiv = styled.div`
    min-height: ${(s: DivType) => s.mh};
    min-width: ${(s: DivType) => s.mw};
    background-color: ${(s: DivType) => s.bgColor};
    overflow: hidden;
    border-radius: ${(s: DivType) => s.bRadius}px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainWrapper = styled.div`
    min-height: 55vh;
    min-width: 80%;
    border: solid black 2px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(s:CustomDivType) => s.fDirection};
    width: ${(s: CustomDivType) => s.w};
    justify-self: ${(s: CustomDivType) => s.jSelf};
    justify-content: ${(s: CustomDivType) => s.jContent};
`
type MainHeaderType = {
    fz?: number | null;

}
const MainHeader = styled.h1`
    font-size: ${(s: MainHeaderType) => s.fz ? s.fz : 3}rem;
    color: ${primaryColor};
`
export default function Daily3(): JSX.Element{
    const [passwordData, setPasswordData] = useState<string>('');
    return(
        <Daily3Section>
            <MainDiv bRadius={20} bgColor='#fff' mh={'70vh'} mw={'50vw'}>
                <MainWrapper>
                    <BoxContainer>
                        <MainHeader>Enter your password</MainHeader>
                    </BoxContainer>
                    <BoxContainer >
                        <BoxContainer w={'30vw'} jContent={'flex-start'}>
                            <Avatar sx={{marginLeft: '2rem',width: '70px', height: '70px'}} src="https://avatars.githubusercontent.com/u/34670769?v=4" alt="Avatar" />
                            <BoxContainer fDirection={'column'}>
                                <MainHeader  fz={1}>Bussiness Account</MainHeader>
                                <MainHeader fz={1.3}>Sarah Bills</MainHeader>
                            </BoxContainer>
                        </BoxContainer>
                    </BoxContainer>
                    <BoxContainer>
                        <AuthenticationPart passwordData={passwordData} setPasswordData={setPasswordData} />
                    </BoxContainer>
                    <BoxContainer></BoxContainer>
                </MainWrapper>
            </MainDiv>
        </Daily3Section>
    )
}
// imports
const AuthContainer = styled.div`
    min-width: 30vw;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
`
const SideSplitter = styled.div`
    min-width: 30vw;
    min-height: 9vh;
    border: 2px blue solid; 
`
type AuthenticationPartType = {
    passwordData: string;
    setPasswordData: React.Dispatch<React.SetStateAction<string>>;
}
const AuthenticationPart = (props: AuthenticationPartType): JSX.Element => {
    
    return(
        <AuthContainer>
            <SideSplitter>
                <CustomDiv  />
            </SideSplitter>
            <SideSplitter></SideSplitter>
        </AuthContainer>
    )
}