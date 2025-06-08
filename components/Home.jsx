
import "../App.css";
import Search from "./Search";
import Filter from "./Filter";
import CountriesCardContainer from "./CountriesCardContainer";
import { useState } from "react";
import { useOutletContext } from 'react-router-dom'

export default function Home() {
  const [query, setQuery] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [isDark] = useOutletContext()

  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <Filter setCountryRegion={setCountryRegion} />
      </div>
      {query === 'unmount' ? '' : <CountriesCardContainer query={query} countryRegion={countryRegion} />}
    </main>
  );
}
