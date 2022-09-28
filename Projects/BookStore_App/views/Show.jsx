const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Show extends React.Component {
  render() {
    const {book}= this.props;
      return (
      <DefaultLayout title={"Book Profile"}>
        <div>
            <nav>
                <a href="/books"> Back</a>
            </nav>
          <br></br>
          {/* <h1> Show Page </h1> */}
          
          {book.title} by {book.author} {" "}
          {book.isAvailable
            ? "Is Available to sale"
            : "Is NOT Available to sale"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;