import React, { Component } from 'react'

export class form extends Component {
    value='input:e.target.value'
    constructor(props) {
      super(props)
    
      this.state = {
        value:'',
        color:'',
      }
    }
 
    ChangeInput=e=>{
        const value = e.target.value
        const color= value?'red':'';
        this.setState({
            value,
            color
           
        })
    }
    submithandler=(e)=>{
       alert(this.state.value);
       e.preventDefault();

    }
   
  render() {
   
   const  {value, color}=this.state 
   const head={
         backgroundColor:'rd',
         color:color
     

}


    return (
      <div>
        <form onSubmit={this.submithandler}>
        <p>username</p>
        <input type="text" value={value} onChange={this.ChangeInput}></input>
        <p style={head}>hii </p>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default form