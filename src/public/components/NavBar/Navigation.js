import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
			<div id="navigation" className="Navigation">
				<nav>
					<ul>
						<li><a href="/category/box-office">Box Office</a></li>
						<li><a href="/category/tv-series">TV Series</a></li>
						<li><a href="/category/animes">Animes</a></li>
					</ul>
				</nav>
			</div>
		);
    }
}
export default Navigation;