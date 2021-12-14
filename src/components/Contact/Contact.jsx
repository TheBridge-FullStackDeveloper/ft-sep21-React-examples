import React, { Component } from "react";

class Contact extends Component {

  constructor(props) {
    super(props)
    
    this.name = React.createRef(); // crear la referencia
    this.state = {
       name:""
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("******PROPS*******");
    console.log(prevProps,this.props);
    console.log("******STATE*******");
    console.log(prevState,this.state);
    
  }

  componentDidMount() {
    
  }



  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.current.value // por referencia
    console.log("******************************+++")
    console.log(name);    
    this.setState({name})
  }
  
  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nombre:</label><br/>
        <input type="text" id="name" name="name" ref={this.name}/><br />
        <input type="submit"/>
      </form> 
    </div>
  }
}

export default Contact;
