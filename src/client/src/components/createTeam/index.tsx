import * as React from "react";
import ParticipantCreator from "./ParticipantCreator";
import readXlsxFile from 'read-excel-file';

interface ICreateTeamState {
    input: string,
    searchInput: string,
    colsName: any[],
    tableRows: any[]
}

interface ICreateTeamProps {
    
}

export default class CreateTeam extends React.Component<ICreateTeamProps,ICreateTeamState> {
    constructor(props){
        super(props);
        
        this.state = {
            input: "",
            searchInput: "",
            colsName: [],
            tableRows: []
        };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onAddCol = this.onAddCol.bind(this);
        this.renderTableBody = this.renderTableBody.bind(this);
        this.addNewParticipant = this.addNewParticipant.bind(this);
        this.setTeamFile = this.setTeamFile.bind(this);
    }
    
    private addNewParticipant(newParticipant: any){
        let newTableRows = this.state.tableRows.slice();
        
        newTableRows.push(Object.values(newParticipant));
        
        this.setState({
            ...this.state,
            tableRows: newTableRows
        });
    }
    
    private onInputChange(e: any,input: string):void {
        let newState = {...this.state};
        
        newState[input] = e.target.value;
        
        this.setState(
            newState
        );
    }
    
    private onAddCol():void {
        if(this.state.input !== "")
            this.setState({
                ...this.state,
                colsName: [...this.state.colsName,this.state.input]
            });
    }
    
    private renderTableCols(cols: any[]): any {
        return <thead>
                    <tr>
                        {
                            cols.map(col => {
                                return <th>{col}</th>
                            })
                        }
                    </tr>
                </thead>
    }
    
    private renderTableBody(rows: any[]): any {
        let markStyle = {backgroundColor: "red"};

        return <tbody>
                    {
                        rows.map(row => {
                            return <tr>
                                    {
                                        row.map(cell => {
                                            return <td style={(this.state.searchInput !== "" && (cell + "") === this.state.searchInput ? markStyle : {})}>{cell}</td>;
                                        })
                                    }
                                </tr>
                        })
                    }
                </tbody>
    }
    
    private renderBtnSection():  any {
        return (
            <React.Fragment>
                <div className="btn-section">
                {
                        // <div>
                        //     <input type="text" 
                        //     value={this.state.input}
                        //     onChange={e => this.onInputChange(e,"input")}/>
                        //     <button onClick={this.onAddCol}>Add Column</button>
                        // </div>
                }
                        
                        <div>
                            <input type="text"
                            placeholder="search"
                            value={this.state.searchInput}
                            onChange={e => this.onInputChange(e,"searchInput")}/>
                        </div>
                    </div>
        </React.Fragment>
        );
    }
    
    private setTeamFile(e: any): void {
        let that = this;
       readXlsxFile(e.target.files[0]).then(rows => {
           that.setState({
               ...this.state,
               colsName: [...rows[0]],
               tableRows: rows.slice(1)
           });
       });
    }
    
    private convertTeamRowToJson(teamArr: any[]): any {
        let convertToObjArr = [],
            competitorObj = {},
            objKeys = teamArr[0];
        
        for(let i = 1; i < teamArr.length; i++){
            for(let key = 0; key < objKeys.length; key++)
                competitorObj[objKeys[key]] = teamArr[i][key];
            
            convertToObjArr.push({...competitorObj})
        }
        
        return convertToObjArr;
    }
    
    render(){
        return(
            <div>
            
                {
                    this.renderBtnSection()
                }
                    
                <div>
                    <input type="file"
                        onChange={e => this.setTeamFile(e)}
                    />
                </div>
                
                <div>
                    <table>
                        {this.renderTableCols(this.state.colsName)}
                        {this.renderTableBody(this.state.tableRows)}
                    </table>
                </div>
                
            </div>
            );
    }
}