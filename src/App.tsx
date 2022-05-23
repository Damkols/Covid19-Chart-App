import React, { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import GlobalInfo from "./components/GlobalInfo";
import type { ResponseData, Country } from "./components/types";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<ResponseData | undefined>(undefined);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data = await result.json();

    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="global__info">
        {data ? (
          <>
            <GlobalInfo
              newConfirmed={data?.Global.NewConfirmed}
              newDeaths={data?.Global.NewDeaths}
              newRecovered={data?.Global.NewRecovered}
            />
            <CountryList countries={data?.Countries} />
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
