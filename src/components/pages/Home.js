import React, { Component, Fragment } from 'react';
import Search from '../Search';
import SearchResults from '../SearchResults';
import axios from 'axios';
import Alert from '../Alert';
import SingleResult from '../SingleResult';

class Home extends Component {
    state = {
        stocks: [],
        singleStock: {},
        loading: false,
        alert: null
    }

    searchStocks = async text => {
        this.setState({ loading: true });

        const res = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text}&apikey=${process.env.REACT_APP_API_KEY}`);
        this.setState({ stocks: res.data.bestMatches, loading: false })
    }

    searchSingleStock = async (ticker) => {
        this.setState({ loading: true });

        const res = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.REACT_APP_API_KEY}`);
        this.setState({ singlestock: res.data, loading: false })
    }

    clearStocks = () => {
        this.setState({ stocks:[], loading:false })
    }

    setAlert = (msg, type) => {
        this.setState({ alert: { msg: msg, type: type } })

        setTimeout( () => this.setState({ alert: null }), 4000 )
    }

    render() {
        const {stocks, loading} = this.state;

        return (
            <Fragment>
                <Alert alert={this.state.alert} />
                <Search
                    searchStocks={this.searchStocks}
                    clearStocks={this.clearStocks}
                    showClear={stocks.length > 0 ? true : false}
                    setAlert={this.setAlert}
                />
                <SearchResults stocks={stocks} loading={loading} />
            </Fragment>
        )
    }
}

export default Home
