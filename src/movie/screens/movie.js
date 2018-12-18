import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import Iframe from 'react-iframe'

class Movie extends Component {

    render() {
        console.log(this.props.location.state)
        const data = this.props.location.state;
        return (
            <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                <Container>
                    {/* <div className="row p-3">
                        <div className="col-md-12">
                            <h2 className="text-left">Movie ID: {this.props.match.params.id}</h2>
                        </div>
                    </div> */}
                    <div className="col-md-12" align="center" style={{ marginBottom: 20 }}>

                        <Iframe url={data.video_url}
                            height="70vh"
                            position="relative"
                            id="myId"
                            className="myClassname"
                            // height="100%"
                            // position="absolute"
                            // width="100%"
                            styles={{ maxHeight: "800px"}}
                            allowFullScreen />
                    </div>
                    <h3 className="text-left">{data.title}</h3>
                    <hr />
                    <Row>
                        <Col xs="3">
                            <img src={data.thumbnails} alt={data.title}/>
                        </Col>
                        <Col xs="auto">
                            <p>Rating: {data.rating}</p>
                            <p>Genre: {data.genre}</p>
                            <p>Description: {data.description}</p>
                            <p>Country: {data.country}</p>
                            <p>Language: {data.language}</p>
                            <p>Release: {data.release}</p>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Movie;