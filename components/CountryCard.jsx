import React from "react";

export default function CountryCard() {
  return (
    <a className="country-card" href="/country.html?name=Guinea-Bissau">
      <img src="https://flagcdn.com/gw.svg" alt="Guinea-Bissau flag" />
      <div className="card-text">
        <h3 className="card-title">Guinea-Bissau</h3>
        <p>
          <b>Population: </b>19,67,998
        </p>
        <p>
          <b>Region: </b>Africa
        </p>
        <p>
          <b>Capital: </b>Bissau
        </p>
      </div>
    </a>
  );
}
