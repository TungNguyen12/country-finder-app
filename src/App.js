import SearchIcon from "./search.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./Countries";

const API_URL = "https://restcountries.com/v3.1/name/";

function App() {
    const [country, setCountry] = useState("finland");
    const [countryData, setCountryData] = useState(null);

    const searchCountry = async (name) => {
        const response = await fetch(`${API_URL}${name}`);
        const data = await response.json();
        console.log(data[0]);
        setCountryData(data[0]);
    };



    useEffect(() => {
        searchCountry(country);
    }, []);

    return (
        <div className="App">
            <div className="header">
                <h1> What country are you curious about?</h1>

                <div className="search">
                    <input
                        placeholder="Find the country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />

                    <img
                        className="search__icon"
                        src={SearchIcon}
                        alt="search icon"
                        onClick={() => searchCountry(country)}
                    />
                </div>
            </div>
            <div className="container">
                {countryData && <Countries data={countryData} />}
            </div>
        </div>
    );
}

export default App;
