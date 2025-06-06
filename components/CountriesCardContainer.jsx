import React from "react";
import CountryCard from "./CountryCard";
import CountriesData from "./../CountriesData";
// console.log(CountriesData);

export default function CountriesCardContainer({ query }) {
  const CountriesArray = CountriesData.filter((country) => {
    return country.name.common.includes(query);
  }).map((country) => {
    return (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        population={country.population.toLocaleString()}
        region={country.region}
        capital={country.capital?.[0]}
        flags={country.flags.svg}
      />
    );
  });
  // console.log(CountriesArray);

  return <div className="countries-container">{CountriesArray}</div>;
}
