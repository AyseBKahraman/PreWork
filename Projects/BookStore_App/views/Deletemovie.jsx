const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Deletemovie extends React.Component {
  render() {
    return (
      <DefaultLayout title="Delete Movie">
        <div className="big">
          <a href={'/movies'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>

          <form 
            action={`/movies/${this.props.movie._id}?_method=DELETE`} method="POST">

            <div className="editForm">
              <p id="areyousure">Are you sure you want to delete this item? </p>
              <input type = 'submit' id="submitChange" value = 'Delete Movie' ></input>
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Deletemovie;

