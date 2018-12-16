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

// CAROUSEL
// import { Carousel } from 'react-responsive-carousel';
// import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
// import '../carousel.css'

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
        <Jumbotron style={{ height: 400, borderRadius: 0 }}>
          <Container>
            <Row style={{ height: 400 }}>
              <Col>
                <h1 style={{ marginBottom: 30 }}>Spider-Man: Into the Spider-Verse (2018) 720p CAM 700MB</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="https://ganol.si/film/spider-man-into-the-spider-verse-2018-720p-cam-700mb"
                    target="_blank"
                  >
                    Watch
                                    </Button>
                </p>
              </Col>
              <Col>
                <img src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" class="img-fluid" alt="Spider-Man: Into the Spider-Verse (2018) 720p CAM 700MB" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <section id="trending">
          <Container>
            <div className="row p-3">
              <div className="col-md-12">
                <h2 className="text-left">Trending</h2>
              </div>
            </div>
            <div className="row" style={{ marginBottom: 30 }}>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <hr />

        <section id="populer">
          <Container>
            <div className="row p-3">
              <div className="col-md-12">
                <h2 className="text-left">Populer</h2>
              </div>
            </div>
            <div className="row" style={{ marginBottom: 30 }}>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <hr />

        <section id="terbaru">
          <Container>
            <div className="row p-3">
              <div className="col-md-12">
                <h2 className="text-left">Terbaru</h2>
              </div>
            </div>
            <div className="row" style={{ marginBottom: 30 }}>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <Card style={{ marginBottom: 5 }}>
                  <CardImg top width="100%" src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" alt="ReactJS + Firebase" />
                  <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>Card Text</CardText>
                    <Link to="/movie/123" className="btn btn-primary btn-sm float-right">Tonton</Link>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;