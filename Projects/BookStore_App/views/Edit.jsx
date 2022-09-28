const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Book">
         <form 
          action={`/books/${this.props.book._id}?_method=PUT`}
          method="POST">
          <br></br>
          <div className="editForm">
          Title:{" "}
          <input
            type="text"
            name="title"
            size="40"
            defaultValue={this.props.book.title}
          />
          <br></br>
          <br></br>
          Author:{" "}
          <input type="text" name="author" defaultValue={this.props.book.author} />
          <br />
          <br />
          Price:{" "}<br></br>
          <input type="text" name="price" defaultValue={this.props.book.price} />
          <br></br><br />
          Is Available:
          {this.props.book.isAvailable ? (
            <input type="checkbox" name="isAvailable" defaultChecked />
          ) : (
            <input type="checkbox" name="isAvailable" />
          )}
          <br /> <br />
          <input type="submit" id="submitChange"value="Update Book" />
          </div>
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;