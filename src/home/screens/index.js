import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg, CardGroup } from 'reactstrap'
import axios from 'axios';

import Item from '@bit/ranm8.netflix-like.ui.item';

// import '../../global.css';
import './global.css'
import './ini.css'

// CAROUSEL
// import { Carousel } from 'react-responsive-carousel';
// import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
// import '../carousel.css'

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    this.state = {
      isOpen: false,
      movies: [],
      page: 1,
      lastPage: 0
    };
  }

  componentDidMount() {
    this.getMovies(1)
  }

  fetchNextPage() {
    const nextPage = this.state.page + 1;
    this.getMovies(nextPage);
    // this.setState({ page: nextPage });
  }
  fetchPreviousPage() {
    const previousPage = this.state.page - 1;
    this.getMovies(previousPage);
    // this.setState({ page: previousPage });
  }

  getMovies(number) {
    axios.get("http://192.168.0.62:3333/movies?page=" + number)
      .then(res => {
        console.log(res.data.data);
        this.setState({ movies: res.data.data, lastPage: res.data.lastPage, page: number });
      })
      .catch(err => console.log(err.response))
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
                <img src="https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg" className="img-fluid" alt="Spider-Man: Into the Spider-Verse (2018) 720p CAM 700MB" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        {/* <section id="trending">
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

        <hr /> */}

        <section id="semua">
          <Container>
            <div className="row p-3">
              <div className="col-md-12">
                <h2 className="text-left">Semua</h2>
              </div>
            </div>
            <CardGroup>
              <div className="row" style={{ marginBottom: 30 }}>
                {/* <Link to={{ pathname: '/movie/' + data.slug, state: data }} data={data} style={{ color: "white", textDecoration: "none" }}> */}
                {
                  this.state.movies.map(data =>
                    //   <Item key={data.id}
                    //   title={data.title.substr(0, data.title.indexOf('('))}
                    //   score={data.rating.substr(0, 3)}
                    //   overview={data.description}
                    //   backdrop={data.thumbnails}
                    // />
                    // <div className='Item' style={{ backgroundColor: 'yellow' }} key={data.id} >
                    <div className='Item' style={{ backgroundImage: 'https://ganol.si/wp-content/uploads/2018/07/The-First-Purge-2018-215x323.jpg' }} key={data.id} >
                      <a href="/" style={{ color: "white", textDecoration: "none" }}>
                        <div className='overlay'>
                          <div className='title'>{data.title}</div>
                          <div className='rating'>{data.rating}</div>
                          <div className='plot'>{data.description}</div>
                        </div>
                      </a>
                    </div>
                  )
                }
                {/* </Link> */}
                {/* previous card clickable */}
                {/* <div className="col-sm-6 col-md-4 col-lg-2" key={data.id}>
                  <Card style={{ marginBottom: 20 }}>
                    <CardImg top width="100%" src={data.thumbnails} alt={data.title} />
                    <CardBody>
                      <CardTitle>{data.title}</CardTitle>
                      <CardText style={{ maxHeight: 200, overflow: "hidden" }}>{data.description}</CardText>
                      <Link to={{ pathname: '/movie/' + data.slug, state: data }} className="btn btn-primary btn-sm float-right" data={data} >Tonton</Link>
                    </CardBody>
                  </Card>
                </div> */}
              </div>
            </CardGroup>
            <div className="col-md-12" align="center" style={{ marginBottom: 20 }}>
              {this.state.page === 1 ?
                <Button style={{ margin: 10 }} color="secondary" size="large" target="_blank" >Sebelumnya</Button>
                :
                <Button style={{ margin: 10 }} onClick={this.fetchPreviousPage} color="success" size="large" target="_blank">
                  Sebelumnya</Button>
              }
              {this.state.page === this.state.lastPage ?
                <Button style={{ margin: 10 }} color="secondary" size="large" target="_blank" >Selanjutnya</Button>
                :
                <Button style={{ margin: 10 }} onClick={this.fetchNextPage} color="success" size="large" target="_blank">
                  Selanjutnyaa</Button>
              }
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;