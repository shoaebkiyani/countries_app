import * as React from "react";
import { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import Search from "./Search";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesperpage] = useState(25);
  const [filtered, setFiltered] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const countriesData = await res.json();
    setCountries(countriesData);
    setIsLoading(false);
  };

  const handleSearch = (results) => {
    setIsLoading(true);
    setFiltered(results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Get current list
  const indexOfLastCountry = currentPage * countriesperpage;
  const indexOfFirstCountry = indexOfLastCountry - countriesperpage;

  let listOfCountries = [];
  if (filtered.length !== 0) {
    listOfCountries = filtered.slice(indexOfFirstCountry, indexOfLastCountry);
  } else {
    listOfCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
  }

  /* Change page */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="wrapper">
      <div>
        <Search countries={countries} onSearch={handleSearch} />
      </div>
      <div>
        <Pagination
          countriesPerPage={countriesperpage}
          totalCountries={countries.length}
          paginate={paginate}
        />
      </div>
      <div className="grid-container">
        {isLoading && <div>Loading...</div>}

        {listOfCountries.map((country) => (
          <Link to={`/name/${country.name.official}`} key={country.tld}>
            <CountryItem key={country.tld} country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
