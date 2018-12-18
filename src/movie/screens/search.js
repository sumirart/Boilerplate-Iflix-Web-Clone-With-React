import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap';

class Search extends Component {

    render() {
        // console.log(this.props);
        return (
            <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                <Container>
                    <div className="row p-3">
                        <div className="col-md-12">
                            <h2 className="text-left">Search: {this.props.match.params.id}</h2>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Search;