import * as React from "react";

export default class Scores extends React.Component {
    render(){
        return(
            <div>
                {
                    this.props.children
                }
            </div>
        );
    }
}