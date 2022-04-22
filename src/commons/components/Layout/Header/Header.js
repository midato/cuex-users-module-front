import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <header className="site-header site-header--menu-right landing-14-menu site-header--absolute site-header--sticky">
        <div className="container">
          <nav className="navbar site-navbar">
            {/*Brand Logo*/}
            <div className="brand-logo">
              <a href="#">
                {/*light version logo (logo must be black)*/}
                <img src="../../../../commons/resources/assets/images/logo-black.png" alt=""
                     className="light-version-logo"/>
                {/*Dark version logo (logo must be White)*/}
                <img src="../../../../commons/resources/assets/images/logo-white.png" alt=""
                     className="dark-version-logo"/>
              </a>
            </div>
            <div className="menu-block-wrapper">
              <div className="menu-overlay"></div>
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">Funcionalidades <i className="fas fa-angle-down"/> </a>
                    <ul className="sub-menu" id="submenu-9">
                      <li className="sub-menu--item">
                        <a href="#">Usuarios</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="#">Core</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="#">Banca Digital</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="#">SIEX</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link-item">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://uxtheme.net/product-support/" className="nav-link-item">Soporte</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-btn header-btn-l-14 ms-auto d-none d-xs-inline-flex">
              {/*<a target="_blank" className="btn btn trail-btn focus-reset" href="https://finestdevs.com/shade/">
                Login
              </a>*/}
              <Link to='/login'
                    className="btn btn trail-btn focus-reset">
                Login
              </Link>
            </div>
            <div className="header-btn header-btn-l-14 ms-auto d-none d-xs-inline-flex">
              <Link to='/register'
                    className="btn btn trail-btn focus-reset">
                Registro
              </Link>
            </div>
            {/*mobile menu trigger*/}
            <div className="mobile-menu-trigger">
              <span></span>
            </div>
            {/*/.Mobile Menu Hamburger Ends*/}
          </nav>
        </div>
      </header>
      {/*Hero Area*/}
      {/*<div className="hero-area-l-14 position-relative z-index-1 overflow-hidden">
        <div className="container">
          <div className="row position-relative justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 pr-0 " data-aos="fade-right" data-aos-duration="800"
                 data-aos-once="true">
              <div className="content">
                <h1>Get More Customers</h1>
                <p>Create custom landing pages with Shades that convert more visitors than any website—no coding
                  required.</p>
                <a href="#" className="btn focus-reset">Start my free trial</a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-5 col-md-8 " data-aos="fade-left" data-aos-duration="800"
                 data-aos-once="true">
              <div className="banner-image-l-14">
                <img src="../../../../commons/resources/assets/images/hero-img.png" alt="" className="w-100 mt-xl-n10"/>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-14"></div>
      </div>*/}
    </>
  )
}

export default Header
