import React, { Component } from 'react';
import SearchResult from './SearchResult';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class SearchResults extends Component {
    static propTypes = {
        stocks: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
    }
    
    render() {
        if (this.props.loading ) {
            return <Spinner />
        } else {            
            return (
                <div style={cardStyle}>
                    {this.props.stocks.map(stock => (
                        <SearchResult key={stock['1. symbol']} stock={stock} />
                        ))}
                </div>
            )
        }
    }
};

const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default SearchResults
