
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        const {logs} = this.props;
        console.log(logs);
            return(
                <DefaultLayout title = {"Captains Dashboard"}>
                    <ul>
                    {logs.map((log, i) => {
                        return (
                        <li key = {i}>
                            <a href = {`/logs/${log.id}`}> {log.title}</a> {log.entry} <br>
                            </br> 

                            {log.isBroken ? "And the ship is broken" : "And the ship is not broken"}

                            {/* -----------EDIT */}
                                <br></br>
                             <a href = {`logs/${log._id}/edit`}> Edit Log</a>

                            {/* -----------DELETE */}
            
                            <form action = {`/logs/${log._id}?_method=DELETE`} method = "POST"> 
                                <input type = 'submit' value = 'DELETE'></input>
                                
                            </form>
                        </li>)
                    })}
                    </ul>
                </DefaultLayout>
        )   
    }
}
module.exports = Index