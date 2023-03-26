import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name , flags , population, region, coatOfArms, area, capital , timezones    } = props.country
    return (
        <div className='country'>
            <img className='image' src={flags.png} alt="" />
            <h1>Country Name: {name.common}  </h1>
            <h3> Capital: {capital} </h3>
            <p> Population:{population} </p>
            <p>Area:{area} </p>
            <p>Region:{region}</p>
            <p> Time Zone: {timezones}</p>
            <p > <img src={coatOfArms.png} alt="" /> </p>
        </div>
    );
};

export default Country;