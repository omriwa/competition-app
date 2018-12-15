import * as React from "react";
//component
import CreateTeam from "../createTeam/index";
import Timer from "../timer/index";
import Scores from "../score/index";
import CompetitorScore from "../score/CompetitorScore";
import ScorePanel from "../score/ScorePanel";
//redux
import { connect } from 'react-redux';


class FightMonitor extends React.Component<any> {
    render(){
        return(
            <div>
                <CreateTeam />
                <ScorePanel />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        state: state
    }
}

export default connect(mapStateToProps)(FightMonitor)