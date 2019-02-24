import React, { Component } from 'react';
import ManageRecipes from './managerecipes';
import AddRecipes from './addrecipes';
import pic from './pic.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, FormFeedback, CustomInput, Card, CardBody, CardTitle, CardText, CardImg, Container, Row, Col } from 'reactstrap';

export default class RecipeSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Recipe Settings</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Recipe Settings</ModalHeader>
          <ModalBody>
          Select from the options below
          <br/>
          <ManageRecipes></ManageRecipes>
          <AddRecipes></AddRecipes>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
