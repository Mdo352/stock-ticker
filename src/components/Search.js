import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchStocks: PropTypes.func.isRequired,
        clearStocks: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    
    
    render() {
        const onSubmit = e => {
            e.preventDefault();
            if (this.state.text === ''){
                console.log('nothing to search')
                this.props.setAlert('Please Enter Something', 'dark')
            }else{
                this.props.searchStocks(this.state.text);
                this.setState({ text: ''});
            }
          };
    
        const onChange = e => this.setState({ [e.target.name]: e.target.value });

        const {showClear, clearStocks} = this.props;

        return (
            <Fragment>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" name='text' value={this.state.text} onChange={onChange} className="form-control" placeholder="Enter ticker..." />
                        <input type='submit' value='Search' className='btn btn-lg btn-dark'/>
                    </div>
                </form>
                {showClear && (
                    <button className="btn btn-dark btn-lg" onClick={clearStocks}> Clear </button>

                )}
            </Fragment>
        )
    }
}

export default Search;
