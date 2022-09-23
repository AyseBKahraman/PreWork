const React = require("react");

class New extends React.Component {
    render(){
        return (
            <div>
                <form action="/logs" method="POST">
                Title: <input type="text" name="title" />
                <textarea  name="tarea" rows="4" cols="50">
                    Typing..      
                </textarea>
                <br />
                Ship Condition: <input type="checkbox" name="shipIsBroken" />
                <br />
                <input type="submit" name="" value="Create ship" />
                </form>
            </div>
        )
    }
}
module.exports = New;