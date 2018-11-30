import * as React from "react";

interface IFormSectionProps {
    headline: string
}

export default class FormSection extends React.Component<IFormSectionProps> {
    render(){
        return(
            <div>
                <h4>{this.props.headline}</h4>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}