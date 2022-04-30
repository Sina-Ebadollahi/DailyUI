import styled from "styled-components"
import { Nightlight } from "@mui/icons-material"
import { LightMode } from "@mui/icons-material"
import { useSelector, useDispatch } from 'react-redux'
// PNG
// import darkPNG from '../../images/Theme/d.PNG'
type SwitchContainerType = {
  jSelf?: string 
}
const SwitchContainer = styled.div`
align-self:${(s: SwitchContainerType) => s.jSelf};
  justify-self: ${(s: SwitchContainerType) => s.jSelf};
    min-height: 5vh;
    min-width: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 2px 3px 4px black; */
    cursor: pointer;
`
export default function ThemeSwitch({jSelf}:{jSelf?: string}): JSX.Element {
  const dispatch = useDispatch();
  const currentTheme: string = useSelector((state: {themeReducer: any, locationReducer: any}) => state.themeReducer);
  
  return (
    <SwitchContainer     jSelf={jSelf}>
      {currentTheme == 'Dark' ? <LightMode onClick={() => dispatch({type: 'CHANGE_THEME', payload: 'Light'})} /> : <Nightlight onClick={() => dispatch({type: 'CHANGE_THEME', payload: "Dark"})} />}
    </SwitchContainer>
  )
}
