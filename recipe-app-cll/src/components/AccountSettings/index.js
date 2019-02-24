import React, { Component } from 'react';
import Profile from './profile';
import ManageRecipes from './managerecipes';
import AddRecipes from './addrecipes';
import RecipeSettings from './recipesettings';
import pic from './pic.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, FormFeedback, CustomInput, Card, CardBody, CardTitle, CardText, CardImg, Container, Row, Col } from 'reactstrap';


class ModalExample extends React.Component {
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
        <Profile></Profile>
        <RecipeSettings></RecipeSettings>
      </div>
    );
  }
}

export default ModalExample;
