import React,{ Component } from "react";

export default class TestTwo extends Component {
    render() {
        throw new Error("error");
        return(
           <div>
            <h1>Component Two</h1>
           </div>
        );
    }
}