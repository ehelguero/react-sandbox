import React from 'react';

class About extends React.Component{
	render() {
		return (
			<div>
				Pagina about
				{this.props.children}
			</div>
		)
	}
}

export default About;