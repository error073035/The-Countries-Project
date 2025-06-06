
import "../App.css";
import Search from "./Search";
import Filter from "./Filter";
import CountriesCardContainer from "./CountriesCardContainer";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <Filter setCountryRegion={setCountryRegion} />
      </div>
      <CountriesCardContainer query={query} countryRegion={countryRegion} />
    </main>
  );
}
