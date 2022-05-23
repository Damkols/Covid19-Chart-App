import React from "react";
import type { Country } from "./types";

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FunctionComponent<CountryListProps> = ({
  countries,
}) => {
  return (
    <div>
      <ul>
        {countries.map((country) => {
          return <li key={country.ID}>{country.Country}</li>;
        })}
      </ul>
    </div>
  );
};

export default CountryList;
