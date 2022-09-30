const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Showebook extends React.Component {
  render() {
    const {ebook}= this.props;
      return (
      <DefaultLayout title={"EBook Profile"}>
        <div>
            <nav>
                <a href="/ebooks"> Back</a>
            </nav>
          <br></br>
          {ebook.title} by {ebook.author} {" "}
          {ebook.isAvailable
            ? "Is Available to sale"
            : "Is NOT Available to sale"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Showebook;