import React, { Component } from 'react';
import pic from './pic.png';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, FormFeedback, CustomInput, Container, Row, Col } from 'reactstrap';


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
        <Button color="danger" onClick={this.toggle}>Recipe Settings</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Recipe Settings</ModalHeader>
          <ModalBody>
            <br />
            <Button color="success" onClick={this.toggleNested}>Add Recipes</Button>{' '}
            <Button color="success" onClick={this.toggleNested}>Manage Recipes</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Add Recipes</ModalHeader>
              <ModalBody>
              <Form>
              <FormGroup>
                <Label for="exampleCustomFileBrowser"></Label>
                <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
              </FormGroup>
                <FormGroup>
                  <Label for="exampleText"></Label>
                  <Input type="text" name="text" id="exampleText" placeholder="Recipe Title" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText"></Label>
                  <Input type="text" name="text" id="exampleText" placeholder="Cook Time" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText"></Label>
                  <Input type="textarea" name="text" id="exampleText" placeholder="Description" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText"></Label>
                  <Input type="text" name="text" id="exampleText" placeholder="Tags" />
                </FormGroup>
                <br />
                <ModalHeader>Ingredient List</ModalHeader>
                <Container>
                    <Row>
                      <Col xs="6" sm="4">
                      <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="qty (1)" bsSize="sm" />
                      </FormGroup>
                      </Col>
                      <Col xs="6" sm="4">
                      <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="value (cup)" bsSize="sm" />
                      </FormGroup>
                      </Col>
                      <Col sm="4">
                      <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="ingredient (milk)" bsSize="sm" />
                      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="6" sm="4">
                      <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="qty (1)" bsSize="sm" />
                      </FormGroup>
                      </Col>
                      <Col xs="6" sm="4">
                      <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="value (cup)" bsSize="sm" />
                      </FormGroup>
                      </Col>
                      <Col sm="4">
                      <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="ingredient (milk)" bsSize="sm" />
                      </FormGroup>
                      </Col>
                    </Row>
                </Container>

                <ModalHeader>Cooking Instructions</ModalHeader>
                <Container>
                <Row>
                  <Col xs="6">
                  <FormGroup>
                    <Label for="exampleText"></Label>
                    <Input type="text" name="text" id="exampleText" placeholder="1." bsSize="sm" />
                  </FormGroup>
                  </Col>
                  <Col xs="6">
                  <FormGroup>
                    <Label for="exampleText"></Label>
                    <Input type="text" name="text" id="exampleText" placeholder="First step..." bsSize="sm" />
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                  <FormGroup>
                    <Label for="exampleText"></Label>
                    <Input type="text" name="text" id="exampleText" placeholder="1." bsSize="sm" />
                  </FormGroup>
                  </Col>
                  <Col xs="6">
                  <FormGroup>
                    <Label for="exampleText"></Label>
                    <Input type="text" name="text" id="exampleText" placeholder="First step..." bsSize="sm" />
                  </FormGroup>
                  </Col>
                </Row>
                </Container>

              </Form>

              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.toggle}>Save</Button>{' '}
                <Button color="secondary" onClick={this.toggleNested}>Go Back</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
