import React, { useState, useEffect } from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import GlobalInfo from "./components/GlobalInfo";
import type { ResponseData, Country } from "./components/types";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<ResponseData | undefined>(undefined);

  const [activeCountries, setActiveCountries] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data = await result.json();

    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCountryClick = (country: Country) => {
    const countryIndex = activeCountries.findIndex(
      (activeCountry) => activeCountry.ID
    );

    if (countryIndex > -1) {
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex, 1);

      setActiveCountries(newActiveCountries);
    } else {
      setActiveCountries([...activeCountries, country]);
    }
  };

  return (
    <div className="App">
      <div className="global__info">
        {activeCountries.map((activeCountry) => {
          return <span>{activeCountry.Country}</span>;
        })}
        {data ? (
          <>
            <GlobalInfo
              newConfirmed={data?.Global.NewConfirmed}
              newDeaths={data?.Global.NewDeaths}
              newRecovered={data?.Global.NewRecovered}
            />
            <CountryList
              countries={data?.Countries}
              onItemClick={onCountryClick}
            />
          </>
        ) : (
          "Loading....."
        )}
      </div>
      <div className="country__list"></div>
    </div>
  );
};

export default App;
