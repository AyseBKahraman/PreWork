const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Page">
         <form
          action={`/books/${this.props.book._id}?_method=PUT`}
          method="POST"
        >
          
          Title:{" "}
          <input
            type="text"
            name="title"
            defaultValue={this.props.book.title}
          />
          <br />
          Author:{" "}
          <input type="text" name="author" defaultValue={this.props.book.author} />
          <br />
          Is Eligible:
          {this.props.book.isPassing ? (
            <input type="checkbox" name="isPassing" defaultChecked />
          ) : (
            <input type="checkbox" name="isPassing" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;