import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg, CardGroup } from 'reactstrap'
import axios from 'axios';

import Hero from './components/Hero';

import './global.css'

// CAROUSEL
// import { Carousel } from 'react-responsive-carousel';
// import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
// import '../carousel.css'

class Home extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    this.state = {
      // isOpen: false,
      movies: [],
      trending: [],
      popular: [],
      page: 1,
      lastPage: 0,
      loading: false
    };
  }

  componentDidMount() {
    this.getMovies(1);
    this.getTrending();
    this.getPopular();
  }


  // fetch next page
  fetchNextPage() {
    const nextPage = this.state.page + 1;
    this.getMovies(nextPage);

    // move to section "semua" after fetching
    const goToAll = document.getElementById('semua');
    goToAll.scrollIntoView();
  }

  // fetch previous page
  fetchPreviousPage() {
    const previousPage = this.state.page - 1;
    this.getMovies(previousPage);

    // move to section "semua" after fetching
    const goToAll = document.getElementById('semua');
    goToAll.scrollIntoView();
  }

  // fetch movies from server
  getMovies(number) {
    this.setState({ loading: true });
    axios.get("http://192.168.0.62:3333/movies?page=" + number)
      .then(res => {
        // console.log(res.data.data);
        this.setState({
          movies: res.data.data,
          lastPage: res.data.lastPage,
          page: number,
          loading: false
        });
        // console.log(this.state)
      })
      .catch(err => {
        alert(err.response);
        this.setState({ loading: false })
      })
  }

  // fetch trending
  getTrending() {
    this.setState({ loading: true });
    axios.get("http://192.168.0.62:3333/movies/trending")
      .then(res => {
        console.log(res.data.data);
        this.setState({
          trending: res.data.data,
          loading: false
        });
        console.log(this.state)
      })
      .catch(err => {
        alert(err.response);
        this.setState({ loading: false })
      })
  }

  // fetch popular
  getPopular() {
    this.setState({ loading: true });
    axios.get("http://192.168.0.62:3333/movies/trending")
      .then(res => {
        console.log(res.data.data);
        this.setState({
          popular: res.data.data,
          loading: false
        });
        console.log(this.state)
      })
      .catch(err => {
        alert(err.response);
        this.setState({ loading: false })
      })
  }


  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return (
      <div style={{ fontFamily: "Lato, sans-serif" }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Hero />
            </div>
            <div className="carousel-item">
              <Hero />
            </div>
            <div className="carousel-item">
              <Hero />
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


        {/* section trending*/}
        <section id="trending">
          <Container>
            <div className="row p-3">
              <div className="col-md-12">
                <h2 className="text-left" style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.4 }}>
                  Trending
                </h2>
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

        {/* section popular */}
        <section id="populer">
          <Container>
            <div className="row p-3">
              <div className="col-md-12">
                <h2 className="text-left" style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.4 }}>
                  Popular
                </h2>
              </div>
            </div>
            <CardGroup>
              <div className="row" style={{ marginBottom: 30 }}>
                {
                  this.state.loading === true ? <div className="text-center">Loading...</div> :

                    this.state.popular.slice(0,5).map(data =>
                      <div key={data.id} className="Item" style={{ backgroundImage: 'url(' + data.thumbnails + ')' }} >
                        <Link to={{ pathname: '/movie/' + data.slug, state: data }} data={data} style={{ color: "white", textDecoration: "none" }}>
                          <div className="overlay">
                            <div className="title" style={{ lineHeight: 1.2 }}>{data.title.replace(/(^\Nonton +|\ Subtitle Indonesia+$)/mg, '')}</div>
                            <div className="rating">
                              {data.rating ?
                                data.rating.substr(0, 3) + ' / 10'
                                : 'no rating'
                              }
                            </div>
                            <div className="plot">{data.description.substr(0, 100) + '..'}</div>
                          </div>
                        </Link>
                      </div>
                    )
                }
              </div>
            </CardGroup>
          </Container>
        </section>

        <hr />

        {/* section all movies*/}
        <section id="semua">
          <Container>
            <div className="row p-3" style={{ padding: 0 }}>
              <div className="col-md-12" style={{ padding: 0 }}>
                <h2 className="text-left"
                  style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.4 }}>All Movies</h2>
              </div>
            </div>

            <CardGroup>
              <div className="row" style={{ marginBottom: 30 }}>
                {
                  this.state.loading === true ? <div className="text-center">Loading...</div> :

                    this.state.movies.map(data =>
                      <div key={data.id} className="Item" style={{ backgroundImage: 'url(' + data.thumbnails + ')' }} >
                        <Link to={{ pathname: '/movie/' + data.slug, state: data }} data={data} style={{ color: "white", textDecoration: "none" }}>
                          <div className="overlay">
                            <div className="title" style={{ lineHeight: 1.2 }}>{data.title.replace(/(^\Nonton +|\ Subtitle Indonesia+$)/mg, '')}</div>
                            <div className="rating">
                              {data.rating ?
                                data.rating.substr(0, 3) + ' / 10'
                                : 'no rating'
                              }
                            </div>
                            <div className="plot">{data.description.substr(0, 100) + '..'}</div>
                          </div>
                        </Link>
                      </div>
                    )
                }
              </div>
            </CardGroup>

            <div className="col-md-12" align="center" style={{ marginBottom: 20 }}>
              {this.state.page === 1 ?
                <Button style={{ margin: 10 }} size="large" target="_blank" >Before</Button>
                :
                <Button style={{ margin: 10 }} onClick={this.fetchPreviousPage} color="danger" size="large" target="_blank">
                  Before</Button>
              }
              {this.state.page === this.state.lastPage || this.state.lastPage === 0 ?
                <Button style={{ margin: 10 }} size="large" target="_blank" >Next</Button>
                :
                <Button style={{ margin: 10 }} onClick={this.fetchNextPage} color="danger" size="large" target="_blank">
                  Next</Button>
              }
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <div className="Item" style={{ backgroundImage: 'url(' + this.props.backdrop + ')' }} >
        <div className="overlay">
          <div className="title" style={{ lineHeight: 1.2 }}>{this.props.title}</div>
          <div className="rating">{this.props.score} / 10</div>
          <div className="plot">{this.props.overview}</div>
        </div>
      </div>
    );
  }
}

export default Home;