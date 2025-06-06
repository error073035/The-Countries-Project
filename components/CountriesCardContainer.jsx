import React from "react";
import CountryCard from "./CountryCard";

export default function CountriesCardContainer({ query, countryRegion }) {
  const [countriesData, setCountriesData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  React.useEffect(() => {
    if (countryRegion) {
      fetch(`https://restcountries.com/v3.1/region/${countryRegion}`)
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data);
        });
    } else {
      fetch("https://restcountries.com/v3.1/region/africa")
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data);
        });
    }
  }, [countryRegion]);

  const CountriesArray = countriesData
    .filter((country) => {
      return country.name.common.toLowerCase().includes(query.toLowerCase());
    })
    .map((country) => {
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
