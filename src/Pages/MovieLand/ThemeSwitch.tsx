import styled from "styled-components"
import { Nightlight } from "@mui/icons-material"
import { LightMode } from "@mui/icons-material"
import { useSelector, useDispatch } from 'react-redux'
// PNG
// import darkPNG from '../../images/Theme/d.PNG'
const SwitchContainer = styled.div`
    min-height: 5vh;
    min-width: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 3px 4px black;
    cursor: pointer;
`
export default function ThemeSwitch(): JSX.Element {
  const dispatch = useDispatch();
  const currentTheme: string = useSelector((state: {themeReducer: any, locationReducer: any}) => state.themeReducer);
  
  return (
    <SwitchContainer>
      {currentTheme == 'Dark' ? <LightMode onClick={() => dispatch({type: 'CHANGE_THEME', payload: 'Light'})} /> : <Nightlight onClick={() => dispatch({type: 'CHANGE_THEME', payload: "Dark"})} />}
    </SwitchContainer>
  )
}
