import React from 'react'
import './Header.css'
import '../../lib/css/bootstrap.min.css'
import '../../lib/css/materialdesignicons.min.css'
import '../../lib/css/owl.carousel.css'
import '../../lib/css/owl.theme.css'
import '../../lib/css/owl.transitions.css'
import '../../lib/css/pe-icon-7.css'
import logo1x from '../../lib/images/logo-120x58.png'
import logo2x from '../../lib/images/logo-240x116.png'
class Header extends React.Component{
    render(){
        return (
            // <!--Navbar Start-->
            <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky sticky-dark">
                <div className="container">
                    <a className="navbar-brand logo">
                        <img src={logo2x} alt="KMS Logo" height="58" srcSet={`${logo1x} 1x, ${logo2x} 2x`}></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                            <li className="nav-item">
                                <a href="#product" className="nav-link">
                                    WHO WE SERVE
                                    <span className="material-icons arrow-down">
                                        expand_more
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#pricing" className="nav-link">WHAT WE DO
                                    <span className="material-icons arrow-down">
                                        expand_more
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#support" className="nav-link">COMPANY
                                    <span className="material-icons arrow-down">
                                        expand_more
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link nav-contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            //  <!-- Navbar End --> 
        )
    }
} 
export default Header