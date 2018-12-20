import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import Iframe from 'react-iframe'

class Movie extends Component {

    render() {
        console.log(this.props.location.state)
        const data = this.props.location.state;
        return (
            <div style={{ marginTop: 100, marginBottom: "5vh" }}>
                <Container>
                    <div className="col-md-12" align="center" style={{ marginBottom: 20 }}>

                        <Iframe url={data.embed_url}
                            height="70vh"
                            position="relative"
                            id="myId"
                            className="myClassname"
                            // height="100%"
                            // position="absolute"
                            // width="100%"
                            styles={{ maxHeight: "800px" }}
                            allowFullScreen />
                    </div>
                    <h2 className="text-left" style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.4, textTransform: "capitalize" }}>{data.title.replace(/(^\Nonton +|\ Subtitle Indonesia+$)/mg, '')}</h2>
                    <hr style={{ borderTop: "3px solid white" }} />
                    <Row>
                        <Col style={{ marginTop: 10, marginBottom: 20  }}>
                            <p>Description: {data.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3" >
                            <img src={data.thumbnails} alt={data.title} style={{ width: "100%" }} />
                        </Col>
                        <Col xs="auto" style={{ fontWeight: "bold" }}>
                            <p>Rating: {data.rating ?
                                data.rating.substr(0, 3) + ' / 10'
                                : 'no rating'
                            }</p>
                            <p>Genre: {data.genre}</p>
                            <p>Description: {data.description}</p>
                            <p>Writers: {data.writers}</p>
                            <p>Directors: {data.director}</p>
                            <p>Genre: {data.genre}</p>
                            {/* <p>Country: {data.country}</p>
                            <p>Language: {data.language}</p>
                            <p>Release: {data.release}</p> */}
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Movie;