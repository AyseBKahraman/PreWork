const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Showgift extends React.Component {
  render() {
    const {gift}= this.props;
      return (
      <DefaultLayout title={"Gift Profile"}>
        <div>
            <nav>
                <a href="/gifts"> Back</a>
            </nav>
          <br></br>
          {gift.title} by {gift.author} {" "}
          {gift.isAvailable
            ? "Is Available to sale"
            : "Is NOT Available to sale"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Showgift;