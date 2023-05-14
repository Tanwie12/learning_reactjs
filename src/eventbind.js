import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'miked'
        }
       // this.clickHandler = this.clickHandler.bind(this); 

    }
    clickHandler=()=>{
        return(
        this.setState({
            message:"changed message"
        }))
    }
    render() {
        return(
            <div>
                <p>{this.state.message}</p>
              

<button onClick={this.clickHandler}>click mme
</button>
            </div>
        )
    }
}
export default Events;