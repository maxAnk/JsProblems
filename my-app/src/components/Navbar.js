/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


export default function Navbar(props){

    const amount = useSelector(state => state.amount)

return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">{props.link1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">{props.link2}</a>
        </li>
      </ul>
     <div>
         <button disabled={true} className='btn-primary'>your balance is : {amount}</button>
     </div>
    </div>
  </div>
</nav>

    )

}

Navbar.propTypes = {
    title : PropTypes.string,
    link1 : PropTypes.string,
    link2 : PropTypes.string
}

Navbar.defaultProps = {
    title : 'set a title',
    link1 : 'link1',
    link2 : 'link2'
};