import React, { Component } from 'react';
import pic from './pic.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardText, CardImg, Container, Row, Col } from 'reactstrap';


class ManageRecipes extends React.Component {
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
        <Button color="success" onClick={this.toggle}>Manage Recipes</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader>Manage Recipes</ModalHeader>
              <ModalBody>
                <Container>
                  <Row>
                   <Col xs="6" sm="4">
                     <Card>
                       <CardImg top width="100%" src={pic} alt="sample" />
                       <CardBody>
                         <CardTitle tag="h3">Recipe Title</CardTitle>
                         <CardText>Date Added</CardText>
                         <CardText>
                           <small className="text-muted">Last updated 3 mins ago</small>
                         </CardText>
                       </CardBody>
                     </Card>
                   </Col>
                   <Col xs="6" sm="4">
                     <Card>
                       <CardImg top width="100%" src={pic} alt="sample" />
                       <CardBody>
                         <CardTitle tag="h3">Recipe Title</CardTitle>
                         <CardText>Date Added</CardText>
                         <CardText>
                           <small className="text-muted">Last updated 3 mins ago</small>
                         </CardText>
                       </CardBody>
                     </Card>
                   </Col>
                   <Col xs="6" sm="4">
                     <Card>
                       <CardImg top width="100%" src={pic} alt="sample" />
                       <CardBody>
                         <CardTitle tag="h3">Recipe Title</CardTitle>
                         <CardText>Date Added</CardText>
                         <CardText>
                           <small className="text-muted">Last updated 3 mins ago</small>
                         </CardText>
                       </CardBody>
                     </Card>
                   </Col>
                 </Row>
                </Container>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.toggle}>Save</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Go Back</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
  }
}

export default ManageRecipes;
