import React, { Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container,
} from "reactstrap";

import { connect } from "react-redux";

import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import RegisterModal from "./auth/RegisterModal";

class AppNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? (
                  <Fragment>
                    <NavItem>
                      <span className="navbar-text mr-3">
                        <strong>{user && `Welcome ${user.name}`}</strong>
                      </span>
                    </NavItem>
                    <NavItem>
                      <Logout />
                    </NavItem>
                  </Fragment>
                ) : (
                  <Fragment>
                    <NavItem>
                      <RegisterModal />
                    </NavItem>
                    <NavItem>
                      <LoginModal />
                    </NavItem>
                  </Fragment>
                )}
                <NavItem>
                  <NavLink href="https://github.com/seen2">Github</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://drive.google.com/file/d/1DIHFSlsu_D6jLUFC9TxTNHaxUzG01x23/view?usp=sharing">
                    {" "}
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3403 14.8175C16.8048 14.8175 16.3692 14.3816 16.3692 13.846C16.3692 13.3105 16.8048 12.8749 17.3403 12.8749C17.8759 12.8749 18.3115 13.3105 18.3115 13.846C18.3115 14.3816 17.8759 14.8175 17.3403 14.8175ZM6.60573 14.8175C6.07018 14.8175 5.63459 14.3816 5.63459 13.846C5.63459 13.3105 6.07018 12.8749 6.60573 12.8749C7.14126 12.8749 7.57687 13.3105 7.57687 13.846C7.57687 14.3816 7.14125 14.8175 6.60573 14.8175ZM17.6887 8.96727L19.6297 5.60561C19.741 5.41239 19.6748 5.16559 19.4818 5.054C19.2889 4.94274 19.0418 5.00893 18.9302 5.20183L16.9649 8.60605C15.462 7.92016 13.7741 7.53813 11.973 7.53813C10.1719 7.53813 8.48403 7.92016 6.98113 8.60605L5.01583 5.20183C4.90425 5.00893 4.65713 4.94274 4.46422 5.054C4.27132 5.16559 4.20481 5.41239 4.31639 5.60561L6.25741 8.96727C2.92444 10.78 0.644884 14.1543 0.311401 18.1407H23.6347C23.3009 14.1543 21.0213 10.78 17.6887 8.96727Z"
                        fill="#ffffff"
                      ></path>
                    </svg>{" "}
                    Download Android App
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
