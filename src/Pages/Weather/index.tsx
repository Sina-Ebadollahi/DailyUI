import styled from "styled-components";

const WeatherContainer = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
// /* ${(s: { imgUrl: string }) => `url(${s.imgUrl})` */
const WeatherInfoContainer = styled.div`
  background-image: url("../../assets/orangeCloud.jpg");
`;
export default function index() {
  return (
    <WeatherContainer>
      <WeatherInfoContainer></WeatherInfoContainer>
    </WeatherContainer>
  );
}
