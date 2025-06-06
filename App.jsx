import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";
import Filter from "./components/Filter";
import CountriesCardContainer from "./components/CountriesCardContainer";
import { useState } from "react";


export default function App() {
    const [query, setQuery] = useState("");
  
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Search setQuery={setQuery} />
          <Filter />
        </div>
        <CountriesCardContainer query={query} />
      </main>
    </>
  );
}
