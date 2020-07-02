import React from 'react'


class Email extends React.Component {

	constructor(props) {
	  super(props);

	this.state = {
		data: {
		  email: props.email
	 }

	}

	}

  render() {
	    return(

		<div className="Email">
		  {this.state.data.email}
		</div>

	   )
	}

}

export default Email;
