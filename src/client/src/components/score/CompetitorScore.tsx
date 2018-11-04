import * as React from "react";

interface ICompetitorScoreProps {
    name: string,
    coach: string,
    penalty?: number,
    advantage?: number,
    point?: number
    
}

export default class CompetitorScore extends React.Component<ICompetitorScoreProps> {
    render(){
        return (
             <div>
                <h3>{this.props.name}</h3>
                
                <div>
                    <h4>Penalty</h4>
                    <div>
                        {(!this.props.penalty ? 0 : this.props.penalty)}
                    </div>
                </div>
                
                <div>
                    <h4>Advatage</h4>
                    <div>
                        {(!this.props.advantage ? 0 : this.props.advantage )}
                    </div>
                </div>
                
                <div>
                    <h4>Points</h4>
                    <div>
                        {(!this.props.point ? 0 : this.props.point)}
                    </div>
                </div>
                
                <h3>Coach: {this.props.coach}</h3>
            </div>    
        );
    }
}