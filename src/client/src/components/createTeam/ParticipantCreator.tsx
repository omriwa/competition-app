import * as React from "react";

interface IParticipantCreatorProps {
    inputs: any[],
    onAddNewParticipant: (newParticipant: any) => void
}

export default class ParticipantCreator extends React.Component<IParticipantCreatorProps> {
    constructor(props){
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    private onSubmit(){
        let newParticipant = {},
            inputs =  document.getElementsByClassName("participant-form-input");
            
        for(let i = 0; i < inputs.length; i++)
            newParticipant[(inputs[i] as HTMLInputElement).name] = (inputs[i] as HTMLInputElement).value;
            
        this.props.onAddNewParticipant(newParticipant);
    }
    
    render(){
        return (
            <div>
                <h3>Participant Card</h3>
                {
                    this.props.inputs.map(input => {
                        return <input className="participant-form-input" type="text" name={input} placeholder={input + ""} />
                    })
                }
                <button onClick={this.onSubmit}>submit</button>
            </div>
        );
    }
}