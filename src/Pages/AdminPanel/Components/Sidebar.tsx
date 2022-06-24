import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { SidebarAssetsArr } from "./SidebarAssets";
//types
import { authInfoReducerType } from "../../../ReduxManager/ReduxMain";
import { useNavigate } from "react-router-dom";
//
const SidebarContainer = styled.div`
  min-height: 100vh;
  min-width: 20vw;
  display: flex;
  flex-direction: column;
`;
const SidebarSeprator = styled.div`
  flex: 1 1 20rem;
`;

export default function Sidebar({
  authInfo,
}: {
  authInfo: authInfoReducerType;
}) {
  return (
    <div
      style={{ minWidth: "10vw", maxWidth: "15vw" }}
      className="h-100 bg-dark min-vh-100 d-flex flex-column"
    >
      {SidebarAssetsArr.map((e) => {
        return <SidebarIconContainer info={e}></SidebarIconContainer>;
      })}
    </div>
  );
}
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
  return (
    <Row className="d-flex flex-row" onClick={(e) => nav(info.buttonNavLink)}>
      {<info.buttonIcon />}
      {info.buttonText}
    </Row>
  );
};
