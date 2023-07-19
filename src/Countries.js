import React from "react";

const Countries = ({ data }) => { //data = {searchCountry('finland')}
    return (
        <div className="countries">
            <article className="country">
                <img className="country__img" src={data.flags.svg} />
                <div className="country__data">
                    <h3 className="country__name">{data.name.official}</h3>
                    <h4 className="country__region">{data.region}</h4>
                    <p className="country__row">
                        <span>👫</span>
                        {(+data.population / 1000000).toFixed(1)}
                    </p>
                    <p className="country__row">
                        <span>🗣️</span>
                        {Object.values(data.languages).join(", ")}
                    </p>
                    <p className="country__row">
                        <span>💰</span>{Object.keys(data.currencies)}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Countries;
