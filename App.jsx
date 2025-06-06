import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";
import Filter from "./components/Filter";
import CountriesCardContainer from "./components/CountriesCardContainer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Search />
          <Filter />
        </div>
        <CountriesCardContainer />
      </main>
    </>
  );
}
