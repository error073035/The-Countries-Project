import React from "react";
import CountryCard from "./CountryCard";
import CountriesData from "./../CountriesData";
// console.log(CountriesData);

export default function CountriesCardContainer() {
  const CountriesArray = CountriesData.map((country)=> {
   return <CountryCard key={country.name.common} name={country.name.common} population={country.population} region={country.region} capital={country.capital} flags={country.flags.svg} />
  })
  // console.log(CountriesArray);

  return <div className="countries-container">{CountriesArray}</div>;
}
