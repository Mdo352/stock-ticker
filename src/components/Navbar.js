import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {
    const {icon, title} = props;

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className='container'>
                <div className="navbar-brand"><i className={icon}></i> {title}</div>
                <div className="collapse navbar-collapse" >
                    <div className="nav navbar-nav mr-auto">
                        <Link className="nav-item nav-link" to="/">Home </Link>
                        <Link className="nav-item nav-link" to="/saved">Saved</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'My Finance',
    icon: 'fas fa-comment-dollar'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}


export default Navbar
