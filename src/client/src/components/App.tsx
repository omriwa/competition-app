import * as React from "react";
//component
import CreateTeam from "./createTeam/index";
import Timer from "./timer/index";
import Scores from "./score/index";
import CompetitorScore from "./score/CompetitorScore";
import FormComponent from "./userForm/index";
import ScorePanel from "./score/ScorePanel";
import FightMonitor from "./fightMonitor/index";
//redux
import { Provider } from 'react-redux';
import store from "./fightMonitor/redux/store";

export default class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
            
                <div>
                    {
                    // <CreateTeam/>
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
                        // <ScorePanel />
                    }
                    <FightMonitor />
                </div>
            
            </Provider>
        );
    }
}