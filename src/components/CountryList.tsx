import React from "react";
import styled from "styled-components";
import CountryItem from "./CountryItem";
import type { Country } from "./types";

interface CountryListProps {
  countries: Country[];
  onItemClick: (country: Country) => void;
}

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  margin: 0 auto;
`;

const CountryList: React.FunctionComponent<CountryListProps> = ({
  countries,
  onItemClick,
}) => {
  return (
    <ListWrapper>
      {countries.map((country) => {
        return (
          <CountryItem
            key={country.ID}
            country={country}
            onItemClick={onItemClick}
          />
        );
      })}
    </ListWrapper>
  );
};

export default CountryList;
