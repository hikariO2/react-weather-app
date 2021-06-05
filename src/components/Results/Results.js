import { Fragment } from "react";

const Results = (props) => {
    return (
        <Fragment>
            {props.results.country && <h1>{props.results.country}</h1>}
            {props.results.cityName && <p>{props.results.cityName}</p>}
            {props.results.temperature && <p>{props.results.temperature}</p>}
            {props.results.conditionText &&
            <div>
                <span>{props.results.conditionText}</span>
                <img src={props.results.icon} alt="cloud icon"/>
            </div>
            }
        </Fragment>
        );
};

export default Results;