import React, { useState } from "react";
import styled from "styled-components";
import type { Country } from "./types";

interface CountryItemProps {
  country: Country;
  onItemClick: (country: Country) => void;
}

interface ListContentProps {
  isActive: boolean;
}

const ListItems = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;

  @media (min-width: 420px) {
    flex: 0 0 33.3%;
  }
`;

const ListContent = styled.div<ListContentProps>`
  background-color: ${(props) => (props.isActive ? "#761e1e" : "#f7f7f7")};
  margin: 5px;
  padding: 20px 0;

  @media (min-width: 420px) {
    padding: 20px 40px;
  }
`;

const CountryItem: React.FunctionComponent<CountryItemProps> = ({
  country,
  onItemClick,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOnCLick = (country: Country) => {
    onItemClick(country);
    setIsActive(!isActive);
  };

  return (
    <ListItems onClick={() => onItemClick(country)}>
      <ListContent isActive={isActive}>
        <h4>{country.Country}</h4>
        <div>New Confirmed: {country.NewConfirmed}</div>
        <div>New Deaths: {country.NewDeaths}</div>
        <div>New Recovered: {country.NewRecovered}</div>
      </ListContent>
    </ListItems>
  );
};

export default CountryItem;
