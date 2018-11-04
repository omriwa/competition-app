import * as React from "react";

interface ITimerState {
    timerOn: boolean,
    timeToCount: number,
    timer: number
}

interface ITimerProps {
    
}

const secondScalar = 1000;

export default class Timer extends React.Component<ITimerProps,ITimerState> {
    private timerInterval: any;
    
    constructor(props){
        super(props);
        
        let initTimeToCount = 0 * secondScalar * 60 + secondScalar * 10;
        
        this.state = {
            timerOn: false,
            timeToCount: initTimeToCount,
            timer:  initTimeToCount
        };
        
        this.toggleTimer = this.toggleTimer.bind(this);
        this.timer = this.timer.bind(this);
    }
    
    private formatMilisecToClock(time: number): string {
        let minutes = Math.floor(time / (secondScalar * 60)),
            seconds = ((time - minutes * secondScalar * 60) / secondScalar);
            
            return minutes + " : " + seconds;
    }
    
    private toggleTimer(): void {
        this.setState({
            ...this.state,
            timerOn: !this.state.timerOn
        },this.timer);
    }
    
    private timer():void {
        let that = this,
            second = 1000;
            
            console.log("this",this)
            if(this.state.timerOn)
                this.timerInterval = setInterval(() => {
                    if(that.state.timer === 0){
                        clearInterval(that.timerInterval);
                        alert("finish");
                    }
                    else
                        that.setState({
                            ...that.state,
                            timer: (that.state.timer - second)
                        });
                },second);
            else//pause timer
                clearInterval(this.timerInterval);
    }
    
    render(){
        return(
            <div>
                <h3><span>{this.formatMilisecToClock(this.state.timeToCount)}</span> Minutes Round</h3>
                <div>
                    {this.formatMilisecToClock(this.state.timer)}
                    <button onClick={this.toggleTimer}> { (this.state.timerOn ? "Pause" : "Start") } clock</button>
                </div>
            </div>
        );
    }
}