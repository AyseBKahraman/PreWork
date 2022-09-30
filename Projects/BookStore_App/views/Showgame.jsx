const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Showgame extends React.Component {
  render() {
    const {game}= this.props;
      return (
      <DefaultLayout title={"Game Profile"}>
        <div>
            <nav>
                <a href="/games"> Back</a>
            </nav>
          <br></br>
          {game.name} by {game.producer} {" "}
          {game.isAvailable
            ? "Is Available to sale"
            : "Is NOT Available to sale"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Showgame;