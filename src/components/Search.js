import React, { Component, Fragment } from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    render() {

        const onSubmit = e => {
            e.preventDefault();
            console.log(this.state.text)
          };

        const onChange = e => this.setState({ [e.target.name]: e.target.value });

        return (
            <Fragment>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" name='text' value={this.state.text} onChange={onChange} className="form-control" placeholder="Enter ticker..." />
                        <input type='submit' value='Search' className='btn btn-lg btn-dark'/>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default Search;
