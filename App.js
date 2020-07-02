import React from 'react';
import Info from './Components/Info'
import './App.css';
import faker  from 'faker'
import SearchBar from './SearchBar'


class App extends React.Component {
	
	state = {
	 text: "",
	 textInput : [],
	 name1: faker.name.findName(),
         name2: faker.name.findName(),
 	 name3: faker.name.findName(),
	 name4: faker.name.findName(),
	 name5: faker.name.findName(),
 	 name6: faker.name.findName(),
	 email1: faker.internet.email(),
	 email2: faker.internet.email(),
	 email3: faker.internet.email(),
	 email4: faker.internet.email(),
	 email5: faker.internet.email(),
	 email6: faker.internet.email(),

	hide  : true,
	hide2 : true,
	hide3 : true,
	hide4 : true,
	hide5 : true,
	hide6 : true

	}

 inputHandle = (text) => {
	//console.log(this.state.textInput);
	
	this.setState({
	    text: text,
	    textInput: [...this.state.textInput, {theText:text,}],
	});
	//console.log(text)	
 }
  
 render() {

 var i;
 var j;
 var k;
 var l;
 var m;
 var o;
 var name1 = this.state.name1.toLowerCase();
 var name2 = this.state.name2.toLowerCase();
 var name3 = this.state.name3.toLowerCase();
var name4 = this.state.name4.toLowerCase();
var name5 = this.state.name5.toLowerCase();
var name6 = this.state.name6.toLowerCase();
var input = this.state.text;
var email1 = this.state.email1.toLowerCase();
var email2 = this.state.email2.toLowerCase();
var email3 = this.state.email3.toLowerCase();
var email4 = this.state.email4.toLowerCase();
var email5 = this.state.email5.toLowerCase();
var email6 = this.state.email6.toLowerCase();
var {hide} = this.state;
var {hide2} = this.state;
var {hide3} = this.state;
var {hide4} = this.state;
var {hide5} = this.state;
var {hide6} = this.state;

   for(i = 0; i < this.state.textInput.length; i++){	 
	if(input[i] === name1.charAt(i) || input[i] === email1.charAt(i)){
	  this.state.hide = true;
	  console.log(input[i])
	}else{
	i = this.state.textInput.length;
	this.state.hide = false;
	  if(hide) {
	   console.log("Name 1 is hidden")
	}
	}
}
 
   	

  for(j = 0; j< this.state.textInput.length; j++){

	if(input[j] === name2.charAt(j) || input[j] === email2.charAt(j)){
	   this.state.hide2 =true;
	   console.log(input[j])
	}else{
	  j = this.state.textInput.length;
	  this.state.hide2 = false; 
	  if(hide2) {
	   console.log("Name 2 is hidden")
	   
	}
	}

	}


for (k = 0; k < this.state.textInput.length; k++) {
    if (input[k] === name3.charAt(k) ||
        input[k] === email3.charAt(k)) {
        this.state.hide3 = true;
        console.log(input[k])
    } else {
	k = this.state.textInput.length;
        this.state.hide3 = false;
        if (hide3) {
            console.log(
                "Name 3 is hidden")
        }
    }
}  

for (l = 0; l < this.state.textInput.length; l++) {
    if (input[l] === name4.charAt(l) || input[l] === email4.charAt(l)) {
        this.state.hide4 = true;
        console.log(input[l])
    } else {
	l = this.state.textInput.length;
        this.state.hide4 = false;
        if (hide) {
            console.log(
                "Name 4 is hidden")
        }
    }
}

for (m = 0; m < this.state.textInput.length; m++) {
    if (input[m] === name5.charAt(m) || input[m] === email5.charAt(m)) {
        this.state.hide5 = true;
        console.log(input[m])
    } else {
	m = this.state.textInput.length;
        this.state.hide5 = false;
        if (hide) {
            console.log(
                "Name 5 is hidden")
        }
    }
}

for (o = 0; o < this.state.textInput.length; o++) {
    if (input[o] === name6.charAt(o) || input[o] === email6.charAt(o)) {
        this.state.hide6 = true;
        console.log(input[o])
    } else {
	o = this.state.textInput.length;
        this.state.hide6 = false;
        if (hide) {
            console.log(
                "Name 6 is hidden")
        }
    }
}


   return (      
        
  <div className="App">
  <SearchBar  inputHandle={this.inputHandle} />
  {hide && (
    <div>
    <Info name = {this.state.name1} email = {this.state.email1}/> 
   </div>
)}
{hide2 && (
  <div>
  <Info name = {this.state.name2} email = {this.state.email2} />
  </div>
)}
{hide3 && (
  <div>
  <Info name = {this.state.name3} email = {this.state.email3} />
  </div>
)}
{hide4 && (
  <div>
  <Info name = {this.state.name4} email = {this.state.email4} />
  </div>
)}
{hide5 && (
  <div>
  <Info name = {this.state.name5} email = {this.state.email5} />
  </div>
)}
{hide6 && (
  <div>
  <Info name = {this.state.name6} email = {this.state.email6} />
  </div>
)}
  </div>
);
}
}






export default App;
