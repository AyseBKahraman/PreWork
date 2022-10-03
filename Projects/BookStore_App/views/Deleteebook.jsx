const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Deleteebook extends React.Component {
  render() {
    return (
      <DefaultLayout title="Delete EBook">
        <div className="big">
          <a href={'/ebooks'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>

          <form 
            action={`/ebooks/${this.props.ebook._id}?_method=DELETE`} method="POST">

            <div className="editForm">
              <p id="areyousure">Are you sure you want to delete this item? </p>
              <input type = 'submit' id="submitChange" value = 'Delete EBook' ></input>
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Deleteebook;

