import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import {
  locationReducerStateType,
  rootListType,
} from "../../ReduxManager/ReduxMain";

const WeatherContainer = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
// /* ${(s: { imgUrl: string }) => `url(${s.imgUrl})` */
const WeatherInfoContainer = styled.div`
  min-width: 60vw;
  min-height: 100vh;
  background-image: url("https://www.hdwallpapers.in/download/orange_yellow_cloudy_sky_hd_orange_aesthetic-1920x1080.jpg"),
    linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
  /* background: url("../../assets/images/orangeCloud.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

//
const WeatherSummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  /* justify-items: center;
  align-items: center; */
  grid-column-gap: 1rem;
  min-height: 30vh;
  min-width: 30vw;
`;
const WeatherSummarySeprator = styled.div`
  min-height: 30vh;
  min-width: 10vw;
  display: flex;
`;
const WeatherSummaryDegree = styled.h1`
  font-size: calc(2rem, 0.1rem + 1vw);
  /* margin: 0.5rem; */
`;
const WeatherSummary = ({ data }: { data: any }): JSX.Element => {
  return (
    <>
      <WeatherSummaryContainer>
        <WeatherSummarySeprator></WeatherSummarySeprator>
        <WeatherSummarySeprator></WeatherSummarySeprator>
        <WeatherSummarySeprator></WeatherSummarySeprator>
      </WeatherSummaryContainer>
    </>
  );
};

const weatherApiKey = "9d530b4533b74c0cb6935942211511";
export default function WeatherIndex() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [weatherRequestParams, setWeatherRequestParams] = useState<{
    q: string;
    apiKey: string | null;
    aqi: string | null;
  }>({ apiKey: weatherApiKey, q: "", aqi: "no" });
  const userIp: locationReducerStateType = useSelector(
    (s: rootListType) => s.locationReducer
  );
  const { fetchFunction } = useFetch();
  const checkIPisValid = (ip: string) => {
    return ip != "" ? ip : "London";
  };
  useEffect(() => {
    (function () {
      if (userIp) {
        setWeatherRequestParams({
          ...weatherRequestParams,
          q: userIp.ipData.ip,
        });
      }
      const data = fetchFunction(
        `http://api.weatherapi.com/v1/current.json?key=${
          weatherRequestParams.apiKey
        }&q=${checkIPisValid(weatherRequestParams.q)}&aqi=${
          weatherRequestParams.aqi
        }`,
        "GET"
      );
      if (data) {
        setWeatherData(data);
      }
    })();
  }, [weatherRequestParams, userIp]);
  return (
    <WeatherContainer>
      <WeatherInfoContainer></WeatherInfoContainer>
    </WeatherContainer>
  );
}
