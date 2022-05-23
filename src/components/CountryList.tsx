import React from "react";
import styled from "styled-components";
import type { Country } from "./types";

// font-family: 'Barlow', sans-serif;
interface CountryListProps {
  countries: Country[];
}

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;

  @media (min-width: 420px) {
    flex: 0 0 33.3%;
  }
`;

const ListContent = styled.div`
  background-color: #f7f7f7;
  margin: 5px;
  padding: 10px 0;
`;

const CountryList: React.FunctionComponent<CountryListProps> = ({
  countries,
}) => {
  return (
    <ListWrapper>
      {countries.map((country) => {
        return (
          <ListItems key={country.ID}>
            <div>
              <h4>{country.Country}</h4>
              <div>New Confirmed: {country.NewConfirmed}</div>
              <div>New Deaths: {country.NewDeaths}</div>
              <div>New Recovered: {country.NewRecovered}</div>
            </div>
          </ListItems>
        );
      })}
    </ListWrapper>
  );
};

export default CountryList;
