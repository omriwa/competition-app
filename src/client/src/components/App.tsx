import * as React from "react";
import CreateTeam from "./createTeam/index";
import Timer from "./timer/index";
import Scores from "./score/index";
import CompetitorScore from "./score/CompetitorScore";
import FormComponent from "./userForm/index";
import ScorePanel from "./score/ScorePanel";

export default class App extends React.Component {
    render(){
        return(
            <div>
                {
                //<CreateTeam/>
                }
                {
                    //<Timer />
                }
                {
                // <Scores>
                //     <CompetitorScore
                //         name={"omri wallach"}
                //         coach={"felipe cancado"}
                //     />
                // </Scores>
                }
                {
                //<FormComponent.Register />
                }
                {
                    <ScorePanel />
                }
            </div>
        );
    }
}