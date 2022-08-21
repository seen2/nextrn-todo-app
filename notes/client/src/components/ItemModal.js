import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  ModalBody,
} from "reactstrap";
// import uuid from "uuid";

import { addItem } from "../redux/actions/itemsAction";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  toggle = () => this.setState({ modal: !this.state.modal });
  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      // id: uuid(),
      name: this.state.name,
    };
    //adding item using action
    this.props.addItem(newItem);
    //closing modal
    this.toggle();
  };
  render() {
    return (
      <div>
        {this.props.auth.isAuthenticated && (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Item
          </Button>
        )}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>ADD TO SHOPING LIST</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shoping Item"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
