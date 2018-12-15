import * as React from 'react';
//components
import Timer from "../timer/index";
//import options from json
import * as penaltyOptions from './options/penalty.json';
import * as advantageOptions from './options/advantage.json';
import * as pointOptions from './options/point.json';
//interface
import IScoreLog from "./scoreLogInterface";

interface IFightLog extends Array<IScoreLog>{}

interface IScorePanelProps {
    
}

interface IScorePanelState {
    penalty: number,
    advantage: number,
    point: number,
    fightLog: IFightLog
}

export default class ScorePanel extends React.Component<IScorePanelProps,IScorePanelState> {
    constructor(props){
        super(props);
        
        this.state = {
            penalty: 0,
            advantage: 0,
            point: 0,
            fightLog: []
        }
        this.onChange = this.onChange.bind(this);
    }
    
    private renderOptions(options: any[]):  any {
        return (
            <select>
                {
                    options.map(option => {
                        return <option>{option}</option>
                    })
                }
            </select>
        );
    }
    
    private onChange(e: any,inputName: string): void {
        if((e.target.value.match(/^[0-9]+$/))){
            let newState = { ...this.state };
            
            newState[inputName] = e.target.value;
            
            this.setState(newState);
        }
    }
    
    render(){
        return(
            <div>
            
                <div>
                    <Timer/>
                </div>
            
                <div>
                    <h4>Penalty</h4>
                    <div>
                        <input  
                        value={this.state.penalty}
                        onChange={e => this.onChange(e,"penalty")}
                        type="number"
                        />
                        {
                            this.renderOptions((Object as any).values(penaltyOptions))
                        }
                        <button>submit</button>
                    </div>
                </div>
                
                <div>
                    <h4>Advatage</h4>
                    <div>
                        <input  
                        value={this.state.advantage}
                        onChange={e => this.onChange(e,"advantage")}
                        type="number"
                        />
                        {
                            this.renderOptions((Object as any).values(advantageOptions))
                        }
                        <button>submit</button>
                    </div>
                </div>
                
                <div>
                    <h4>Points</h4>
                    <div>
                         <input  
                        value={this.state.point}
                        onChange={e => this.onChange(e,"point")}
                        type="number"
                        />
                        {
                            this.renderOptions((Object as any).values(pointOptions))
                        }
                        <button>submit</button>
                    </div>
                </div>
                
                <div>
                    <button>submit score</button>
                </div>
                
            </div>
        );
    }
}