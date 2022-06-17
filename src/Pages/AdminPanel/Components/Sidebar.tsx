import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

//types
import { authInfoReducerType } from "../../../ReduxManager/ReduxMain";
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
      style={{ minWidth: "10vw" }}
      className="h-100 bg-dark min-vh-100 "
    ></div>
  );
}
const SidebarIconContainer = (): JSX.Element => {
  return <SidebarSeprator></SidebarSeprator>;
};
