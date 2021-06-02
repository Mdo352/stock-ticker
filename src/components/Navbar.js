import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static defaultProps = {
        title: 'My Finance',
        icon: 'fas fa-comment-dollar'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }

    render() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className='container'>
                    <div className="navbar-brand"><i className={this.props.icon}></i> {this.props.title}</div>
                    <div className="collapse navbar-collapse" >
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/">Home </a>
                            <a className="nav-item nav-link" href="/saved">Saved</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
