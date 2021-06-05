import { Fragment } from "react";

const Results = ({ results }) => {
    const {country, cityName, localTime, temperature, conditionText, icon} = results;
    return (
        <Fragment>
            {results.country && <h1>{results.country}</h1>}
            {results.cityName && <p>{results.cityName}</p>}
            {results.temperature && <p>{results.temperature}</p>}
            {results.conditionText &&
            <div>
                <span>{results.conditionText}</span>
                <img src={results.icon} alt="cloud icon"/>
            </div>
            }
        </Fragment>
        );
};

export default Results;