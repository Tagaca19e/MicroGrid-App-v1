// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import React from "react";
import Link from "@/utils/ActiveLink";

const NavbarStyleTwo = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/logo19.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/faq" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        FAQ
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Features
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/features" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 1
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/features-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 2
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog-grid" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Blog Grid
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options">
                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyleTwo;
