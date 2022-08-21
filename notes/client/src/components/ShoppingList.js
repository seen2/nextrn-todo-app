import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import { getItems, deleteItem } from "../redux/actions/itemsAction";

class ShoppingList extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDelete = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const items = this.props.items;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {this.props.auth.isAuthenticated && (
                    <Button
                      onClick={() => this.onDelete(_id)}
                      className="remove-btn"
                      color="danger"
                      size="sm"
                    >
                      &times;
                    </Button>
                  )}
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.item.items,
  auth: state.auth,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
