import React, { useEffect } from "react";
import "../country.css";

export default function CountryDetail() {
  const countryName = new URLSearchParams(location.search).get("name");
  // console.log(countryName);
    const [countriesData, setCountriesData] = React.useState(null);
  
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then(([data]) => {
      console.log(data);
      setCountriesData({
        name: data.name.common,
        flags: data.flags.svg,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital ? data.capital[0] : "No capital",
        tld: data.tld ? data.tld.join(", ") : "No top-level domain",
        currencies: Object.values(data.currencies || {}).map((currency) => currency.name),
        languages: Object.values(data.languages || {}),
        borders: data.borders || [],
        nativeName: Object.values(data.name.nativeName)[0].common
      });
    });
  }, []);

  return (
    countriesData === null ? "Loading..." :(

    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={countriesData.flags} alt={countriesData.name} />
          <div className="details-text-container">
            <h1>{countriesData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countriesData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countriesData.population.toLocaleString()}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countriesData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countriesData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countriesData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countriesData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countriesData.currencies.join(", ")}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countriesData.languages.join(", ")}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countriesData.borders ? countriesData.borders.join(", ") : "None"}
            </div>
          </div>
        </div>
      </div>
    </main>
  ));
}
