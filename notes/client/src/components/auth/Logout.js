import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";

import { logout } from "../../redux/actions/authAction";

class Logout extends React.Component {
  render() {
    return (
      <Fragment>
        <NavLink onClick={this.props.logout} href="#">
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(Logout);
