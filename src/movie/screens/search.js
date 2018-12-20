import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import queryString from 'query-string';
import axios from 'axios';

import { Container, Button, Card, CardBody, CardTitle, CardText, CardImg, CardGroup } from 'reactstrap'
import Item from '@bit/ranm8.netflix-like.ui.item';

class Search extends Component {
    constructor(props) {
        super(props);
        this.fetchMore = this.fetchMore.bind(this);
        this.state = {
            movies: [],
            page: 1,
            lastPage: 0
        };
    }

    componentDidMount() {
        this.getMovies(1)
    }

    fetchMore() {
        const nextPage = this.state.page + 1;
        this.getMovies(nextPage);
    }

    getMovies(number) {
        const values = queryString.parse(this.props.location.search);
        if (this.state.movies === undefined || this.state.movies.length == 0) {
            axios.get("http://192.168.0.62:3333/movies?search=" + values.search + "&page=" + number)
                .then(res => {
                    // console.log(res.data);
                    this.setState({ lastPage: res.data.lastPage, page: number });
                    this.setState({ movies: res.data.data });
                })
                .catch(err => alert(err.response))
        } else {
            axios.get("http://192.168.0.62:3333/movies?search=" + values.search + "&page=" + number)
                .then(res => {
                    const pushMovie = [...this.state.movies, ...res.data.data];
                    console.log(pushMovie);
                    this.setState({ lastPage: res.data.lastPage, page: number });
                    this.setState({ movies: pushMovie });
                })
                .catch(err => alert(err.response))
        }

    }

    render() {
        const values = queryString.parse(this.props.location.search)
        return (
            <section id="semua" style={{ marginTop: 90, marginBottom: "5vh" }}>
                <Container>
                    <div className="row p-3">
                        <div className="col-md-12">
                            <h2 className="text-left">Search for: {values.search}</h2>
                        </div>
                    </div>
                    {
                        this.state.lastPage === 0 ?
                            <div className="row p-3">
                                <div className="col-md-12">
                                    <h2 className="text-left">No movies found!</h2>
                                </div>
                            </div>
                            :
                            <CardGroup>
                                <div className="row" style={{ marginBottom: 10 }}>
                                    {
                                        this.state.movies.map(data =>
                                            <Item key={data.id}
                                                title={data.title.substr(0, data.title.indexOf('('))}
                                                score={data.rating.substr(0, 3)}
                                                overview={data.description}
                                                backdrop={data.thumbnails}
                                            />
                                        )
                                    }
                                    {/* previous clickable item
                                    <div className="col-sm-6 col-md-4 col-lg-2" key={data.id}>
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
                    }
                    <div className="col-md-12" align="center" style={{ marginBottom: 20 }}>
                        {this.state.page === this.state.lastPage || this.state.lastPage === 0 || this.state.lastPage === 1 ?
                            <Button color="secondary" size="large" target="_blank" >Load More</Button>
                            :
                            <Button onClick={this.fetchMore} color="success" size="large" target="_blank">
                                Load More</Button>
                        }
                    </div>
                </Container>
            </section>
        );
    }
}

export default Search;