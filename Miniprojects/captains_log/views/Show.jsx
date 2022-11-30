const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Show extends React.Component {
  render() {
    const {log}= this.props;
      return (
      <DefaultLayout title={"Log Profile"}>
        <div>
            <nav>
                <a href="/logs"> Back2 Dashboard</a>
            </nav>
          <h1> Show Page </h1>
          {log.name}'s grade is  {log.date}
          <br /> Log{" "}
          {log.isBroken
            ? "Is good"
            : "Is NOT good"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;