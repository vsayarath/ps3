import React from "react"


class Name extends React.Component{
	
	constructor(props){
	super(props);
	this.state = {
	  data: {
		name : props.name
	}

	}

	}

	render() {
	  return(
		<div className="Name">
		   {this.state.data.name}
		</div>

	)

	}
}
export default Name;
