import { Link } from "react-router-dom";
import styled from "styled-components";

const allRoutesFunc = (): { details: string; route: string }[] => {
  return [
    { details: "Daily1", route: "Daily1" },
    { details: "Daily2", route: "Daily2" },
    { details: "Daily3", route: "Daily3" },
    { details: "MovieLand", route: "MovieLand" },
    { details: "PizzaLand", route: "PizzaLand" },
    { details: "BootstrapTest", route: "BootstrapTest" },
    { details: "Admin", route: "Admin" },
    { details: "BinaryCalculator", route: "BinaryCalculator" },
  ];
};
const HomeContainer = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export default function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <RouteSegment />
      </HomeWrapper>
    </HomeContainer>
  );
}
const RouteSegmentWrapper = styled.div`
  background-color: #f8cbcb;
  min-width: 30vw;
  max-height: 100vh;
  padding: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RouteDetails = styled.p`
  font-size: 0.9rem;
  line-height: 0.7rem;
  color: gray;
`;
const RouteHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.5rem;
`;
const RouteSegment = (): JSX.Element => {
  return (
    <>
      {allRoutesFunc().map((e) => {
        return (
          <RouteSegmentWrapper>
            <RouteDetails>{e.details}</RouteDetails>
            <Link to={`/${e.route}`}>
              <RouteHeader>{e.route}</RouteHeader>
            </Link>
          </RouteSegmentWrapper>
        );
      })}
    </>
  );
};
