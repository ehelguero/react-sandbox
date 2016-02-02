import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import ContactList from './ContactList';
import About from './About';
import MessageAbout from './MessageAbout';
import AboutDetail from './AboutDetail';


class App extends React.Component {
	render() {
	return (<div>
				<h1>Contact List {this.props.name}</h1>
				<ul>
					<li><Link to="/contactlist">Contact List</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				{this.props.children}
			</div>)
	}
}

//render(<App name='Esteban' />, document.getElementById('app'));
render((
	<Router>
		<Route path="/" component={App} >
			<Route path="/contactlist" component={ContactList} />
			<Route path="/about" component={About}>
				<IndexRoute component={AboutDetail} />
				<Route path="message/:id" component={MessageAbout} />
			</Route>
		</Route>
	</Router>
), document.getElementById('app'))
