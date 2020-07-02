import React from "react"
import Email from "./SubComponent/Email"
import Name from "./SubComponent/Name"

class Info extends React.Component {

	constructor(props){
	super(props);
	this.state = {
		data: {
		  name: props.name,
		  email: props.email,
	},
		
	}

}

	render () {

	  const divName = {
	    padding:"15px",
	    textAlign: "center",
	    whiteSpace: "normal",
	    textIndent:"-2em",
	    	    	    
	};
	  const spanEmail = {
	   textAlign: "center",
	   marginLeft: "100px"  
	    
	};
	  return(

		<div style={divName}>
		{this.state.data.name}
	 	<span style ={spanEmail}>{this.state.data.email}</span>
		</div>
		
	)

	}
}
export default Info;
