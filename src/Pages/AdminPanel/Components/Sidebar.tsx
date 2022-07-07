import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { SidebarAssetsArr } from "./SidebarAssets";
//types
import { authInfoReducerType } from "../../../ReduxManager/ReduxMain";
import { useNavigate } from "react-router-dom";
import { rootListType } from "../../../ReduxManager/ReduxMain";
import { useSelector } from "react-redux";
//
const SidebarContainer = styled.div`
  min-height: 100vh;
  min-width: 15vw;
  max-width: 15vw;
  display: flex;
  flex-direction: column;
  background: #706f6f;
`;

export default function Sidebar({
  authInfo,
}: {
  authInfo: authInfoReducerType;
}) {
  const theme = useSelector((s: rootListType) => s.themeReducer);
  return (
    // <div
    //   style={{ minWidth: "10vw", maxWidth: "15vw" }}
    //   className="h-100 bg-dark min-vh-100 d-flex flex-column"
    // >
    //   <Col>
    //     {SidebarAssetsArr.map((e) => {
    //       return <SidebarIconContainer info={e} />;
    //     })}
    //   </Col>
    // </div>
    <SidebarContainer>
      {SidebarAssetsArr.map((each) => {
        return <SidebarIconContainer info={each} />;
      })}
    </SidebarContainer>
  );
}
const SidebarSeprator = styled.div`
  flex: 1 1 20rem;
  max-height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid blue;
  margin: 1rem;
  &:hover {
    animation: hoverAnim 1s forwards;
  }
  @keyframes hoverAnim {
    0% {
      background: #696868;
    }
    100% {
      background: #949090;
    }
  }
  cursor: pointer;
`;
const SidebarSingleHeader = styled.h2`
  font-size: 1rem;
  color: white;
  @media screen and (min-width: 970px) {
    font-size: 1.5rem;
  }
`;
type SidebarIconContainerParam = {
  buttonText: string;
  buttonIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  buttonNavLink: string;
};
const SidebarIconContainer = ({
  info,
}: {
  info: SidebarIconContainerParam;
}): JSX.Element => {
  const nav = useNavigate();
  const { width, height } = useSelector(
    (s: rootListType) => s.windowSizeReducer
  );
  return (
    <SidebarSeprator onClick={(e) => nav(info.buttonNavLink)}>
      <info.buttonIcon style={{ color: "white", marginBottom: "0.5rem" }} />
      {width > 680 && (
        <SidebarSingleHeader>{info.buttonText}</SidebarSingleHeader>
      )}
    </SidebarSeprator>
  );
};
