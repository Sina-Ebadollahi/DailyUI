import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 85vw;
  min-width: 85vw;
  max-height: 15vh;
  min-height: 15vh;
  background-color: #e2dcdc;
`;
const ProfileComponentsContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  min-width: 30vw;
  min-height: 15vh;
`;
export default function Navbar() {
  return (
    <NavContainer>
      <ProfileComponentsContainer></ProfileComponentsContainer>
    </NavContainer>
  );
}
