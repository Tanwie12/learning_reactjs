import React, { Component } from 'react'

class ErroBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasErrors:false
      }
    }
    static getDerivedStateFromError(){
        return{
            hasErrors:true,
        }
    }
  render() {
   if(this.state.hasErrors){
    return(<h1>has an erro</h1>)
   }else{
    return this.props.children
   }
  
  }
}

export default ErroBoundary