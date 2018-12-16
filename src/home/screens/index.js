import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';


class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div>
          <Jumbotron style={{ height: 400 }}>
            <Container>
              <Row>
                <Col>
                  <h1>Welcome to React</h1>
                  <p>
                    <Button
                      tag="a"
                      color="success"
                      size="large"
                      href="http://reactstrap.github.io"
                      target="_blank"
                    >
                      View Reactstrap Docs
                                    </Button>
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
    );
  }
}

export default Home;