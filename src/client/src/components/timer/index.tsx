import * as React from "react";

interface ITimerProps {
    
}

interface ITimerState {
    timerOn: boolean,
    timeToCount: number,
    timer: number,
    second: number,
    minute: number
}

const secondScalar = 1000;

export default class Timer extends React.Component<ITimerProps,ITimerState> {
    private timerInterval: any;
    private initTimeToCount = 5 * secondScalar * 60 + secondScalar * 0;
    
    constructor(props){
        super(props);
        
        this.state = {
            timerOn: false,
            timeToCount: this.initTimeToCount,
            timer:  this.initTimeToCount,
            second: 0,
            minute: 5 
        };
        
        this.toggleTimer = this.toggleTimer.bind(this);
        this.timer = this.timer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.onMinuteChange = this.onMinuteChange.bind(this);
        this.onSecondChange = this.onSecondChange.bind(this);
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
    
    private resetTimer():void {
        //clear interval
        clearInterval(this.timerInterval);
        //reset the timer
        this.setState(
            {
                ...this.state,
                timerOn: false,
                timeToCount: this.initTimeToCount,
                timer:  this.initTimeToCount
            }    
        );
    }
    
    private onSecondChange(e: any){
        let second = e.target.value,
            timeCalc = this.getTimeCalculate(this.state.minute,second);
        
        if(second >= 0)
            this.setState(
                {
                    ...this.state,
                    timeToCount: timeCalc,
                    timer:  timeCalc,
                    second: second
                }
            );
    }
    
    private onMinuteChange(e: any){
        let minute = e.target.value,
            timeCalc = this.getTimeCalculate(minute,this.state.second);
        
        if(minute >= 0)
            this.setState(
            {
                ...this.state,
                timeToCount: timeCalc,
                timer:  timeCalc,
                minute: minute
            }
        );
    }
    
    private getTimeCalculate(minute: number, second: number): number {
        return minute * secondScalar * 60 + secondScalar * second;
    }
    
    render(){
        return(
            <div>
                <h3><span>{this.formatMilisecToClock(this.state.timeToCount)}</span> Minutes Round</h3>
                
                <div>
                    {this.formatMilisecToClock(this.state.timer)}
                    <button onClick={this.toggleTimer}> { (this.state.timerOn ? "Pause" : "Start") } clock</button>
                    <button onClick={this.resetTimer}>Reset Timer</button>
                </div>
                
                <div>
                    <h3>Timer Settings</h3>
                    <input 
                        onChange={this.onMinuteChange}
                        value={this.state.minute}
                        type="number" 
                    />
                    <input 
                        onChange={this.onSecondChange}
                        value={this.state.second}
                        type="number" 
                    />
                </div>
            </div>
        );
    }
}