import React from "react";

class Comp1 extends React.Component {
    
    constructor() {
        super();
        this.state = {      //Object
            count: 0
        }
    }
     handler = () => {
         let currentCount = this.state.count;
         currentCount++;
         this.setState({
             count: currentCount
         });
}
    render() {
        return (
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>This button change State</button>
                </div>
                <div>
                    {this.state.count}
                </div>
            </>
        );
    }
}

export default Comp1;