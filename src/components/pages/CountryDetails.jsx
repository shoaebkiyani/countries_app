import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  const fetchCountryDetails = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const details = await res.json();
    setCountry(details);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountryDetails();
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className="wrapper">
      <Link to="/">Back to home</Link>
      <div className="grid-container details">
        {isLoading && <div>Loading...</div>}
        {country.map((con) => (
          <article key={con.tld}>
            <img
              style={{ width: "100%", height: "50%" }}
              src={con.flags.svg}
              alt={con.name.common}
            />
            <h2>{con.name.common}</h2>
            <span>{con.capital}</span>
            <p>
              The country belongs to <strong>{con.region}</strong> region and{" "}
              <strong>{con.subregion}</strong> sub-region. Located at the{" "}
              <strong>{con.latlng[0].toFixed()} &deg;N </strong> and{" "}
              <strong>{con.latlng[1].toFixed()} &deg;W</strong> . This country
              has population of <strong>{con.population}</strong> and it has
              gained the independent, according to the CIA World Factbook.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
export default CountryDetails;
