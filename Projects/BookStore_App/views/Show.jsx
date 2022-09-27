const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Show extends React.Component {
  render() {
    const {book}= this.props;
      return (
      <DefaultLayout title={"Book Profile"}>
        <div>
            <nav>
                <a href="/books"> Back2 Dashboard</a>
            </nav>
          <h1> Show Page </h1>
          
          {book.title}'s grade is  {book.author}
          <br /> Book{" "}
          {book.isPassing
            ? "Is Eligible to Graduate"
            : "Is NOT Eligible to Graduate"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;