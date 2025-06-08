import React from "react";
import CountryCard from "./CountryCard";
import CountriesCardContainerShimmer from "./CountriesCardContainerShimmer";

export default function CountriesCardContainer({ query, countryRegion }) {
  const [countriesData, setCountriesData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    if (countryRegion) {
      fetch(`https://restcountries.com/v3.1/region/${countryRegion}`)
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data);
          setLoading(false);
        });
    } else {
      fetch("https://restcountries.com/v3.1/region/africa")
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data);
          setLoading(false);
        });
    }
  }, [countryRegion]);

  if (loading) {
    return <CountriesCardContainerShimmer />;
  }

  const CountriesArray = countriesData
    .filter((country) => {
      return country.name.common.toLowerCase().includes(query.toLowerCase());
    })
    .map((country) => (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        population={country.population.toLocaleString()}
        region={country.region}
        capital={country.capital?.[0]}
        flags={country.flags.svg}
      />
    ));

  return <div className="countries-container">{CountriesArray}</div>;
}
