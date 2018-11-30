import * as React from "react";
import Component from "./components/index";

interface IRegisterProps {
    
}

interface IRegisterState {
    trainer: boolean
}

export default class Register extends React.Component<IRegisterProps,IRegisterState> {
    constructor(props){
        super(props);
        
        this.state = {
            trainer: false
        }
    }
    
    private renderAccountInfoSection(): any {
        return <Component.FormSection headline="Account Information">
                        <Component.FormInput  label={"user name"}>
                            <input type="text" placeholder="user name"/>
                        </Component.FormInput>
                        
                        <Component.FormInput  label={"password"}>
                            <input type="password" placeholder="password"/>
                        </Component.FormInput>
                        
                        <Component.FormInput  label={"repeat password"}>
                            <input type="password" placeholder="repeat password"/>
                        </Component.FormInput>
                        
                        <Component.FormInput  label={"Email"}>
                            <input type="Email" placeholder="Email"/>
                        </Component.FormInput>
                    </Component.FormSection>;
    }
    
    private renderPersonalInfoSection(): any {
        return <Component.FormSection headline="Personal Information">
                        <Component.FormInput  label={"user name"}>
                            <input type="text" placeholder="user name"/>
                        </Component.FormInput>
                        
                        <Component.FormInput  label={"password"}>
                            <input type="password" placeholder="password"/>
                        </Component.FormInput>
                        
                        <Component.FormInput  label={"repeat password"}>
                            <input type="password" placeholder="repeat password"/>
                        </Component.FormInput>
                        
                        <Component.FormInput  label={"Email"}>
                            <input type="Email" placeholder="Email"/>
                        </Component.FormInput>
                    </Component.FormSection>;
    }
    
    render(){
        return(
            <div>
                <form>
                    {this.renderAccountInfoSection()}
                    {this.renderPersonalInfoSection()}
                </form>
            </div>
        );
    }
}