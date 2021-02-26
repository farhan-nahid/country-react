import React from 'react';
import './Country.css';

const Country = (props) => {
   console.log(props);
   const {name,flag,area,capital,population,region} = props.country;
    const handleAddCountry =props.handleAddCountry
    return (
        
        <div className="country">
            <div className="content">
            <img src={flag} alt=""/>
            <h2> Name : {name}</h2>
            <p>Capital : {capital}</p>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
             <p>Region : {region}</p>
             <button className="country-btn" onClick={() =>handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;