const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Editebook extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit EBook">
        <div className="big">
          <a href={'/ebooks'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
        <form 
          action={`/ebooks/${this.props.ebook._id}?_method=PUT`}
          method="POST">
          <br></br>

          <div className="editForm">

            Title:{" "}
            <input type="text" name="title" size="40" defaultValue={this.props.ebook.title} />
            <br></br> <br></br>

            Author:{" "}
            <input type="text" name="author" defaultValue={this.props.ebook.author} />
            <br /> <br />

            Price:{" "}<br></br>
            <input type="text" name="price" defaultValue={this.props.ebook.price} />
            <br></br><br />

            Is Available:{this.props.ebook.isAvailable ? (
              <input type="checkbox" name="isAvailable" defaultChecked />
            ) : (
              <input type="checkbox" name="isAvailable" />
            )}
            <br /> <br />

            <input type="submit" id="submitChange"value="Update Book" />
          </div>
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Editebook;