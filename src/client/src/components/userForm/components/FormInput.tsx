import * as React from "react";

interface IFormInputProps {
    label?: string,
    style?: any,
    classNames?: any[]
}

export default class FormInput extends React.Component<IFormInputProps> {
    render(){
        const style = (this.props.style ? this.props.style : {}),
            classNames = (this.props.classNames ? this.props.classNames : []);
        return(
            <div>
            
                <label>{this.props.label}</label>
                <br/>
                {this.props.children}
                
            </div>
        );
    }
}