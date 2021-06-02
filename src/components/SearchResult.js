import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchResult = (props) => {

    return (
        <div className='card' style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.stock['2. name']} - {props.stock['1. symbol']} </h5>
                <p>{props.stock['4. region']}, {props.stock['8. currency']}</p>
                <Link to={`company/${props.stock['1. symbol']}`} className="btn btn-dark">View More</Link>
            </div>
        </div>
    )
}

SearchResult.propTypes = {
    stock: PropTypes.object.isRequired,
};

export default SearchResult;
