import styled from "styled-components"

//types
import { authInfoReducerType } from "../../../ReduxManager/ReduxMain"
//
const NavbarContainer = styled.div`
    /* min-height */
`

export default function Navbar({authInfo} : {authInfo : authInfoReducerType}) {
  return (
    <div>Navbar</div>
  )
}
