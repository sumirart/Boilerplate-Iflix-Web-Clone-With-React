import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

class Categories extends Component {
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
                <Container>
                    <div className="row p-3">
                        <div className="col-md-12">
                            <h2 className="text-left">Kategori</h2>
                        </div>
                    </div>
                </Container>
                <hr />

            </div>
        );
    }
}

export default Categories;