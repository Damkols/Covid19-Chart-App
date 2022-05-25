import React from "react";
import styled from "styled-components";

interface GlobalInfoProps {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const Wrapper = styled.div`
  text-align: center;
`;
const Title1 = styled.h1`
  margin: 20px auto;
  text-align: center;
`;
const Title2 = styled.h3`
  margin: 10px auto;
  text-align: center;
`;

const GlobalInfo: React.FunctionComponent<GlobalInfoProps> = ({
  newConfirmed,
  newDeaths,
  newRecovered,
}) => {
  return (
    <Wrapper>
      <Title1>Global Covid-19 data</Title1>
      <Title2>
        New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}
      </Title2>
      <Title2>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</Title2>
      <Title2>
        New Recovered: {new Intl.NumberFormat().format(newRecovered)}
      </Title2>
    </Wrapper>
  );
};

export default GlobalInfo;
