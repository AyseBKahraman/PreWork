const React = require("react");
const DefaultLayout = require("./layouts/Default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Log Page"}>
        <div>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" />
            <br />
            date <input type="text" name="date" />
            <br />
            entry <input type="text" name="entry" />
            <br />
            Eligible for ocean <input type="checkbox" name="isBroken" />
            <br />
            <input type="submit" name="" value="Create Log" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = New;