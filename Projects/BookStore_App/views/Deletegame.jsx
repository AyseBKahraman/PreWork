const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Deletegame extends React.Component {
  render() {
    return (
      <DefaultLayout title="Delete Game">
        <div className="big">
          <a href={'/games'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>

          <form 
            action={`/games/${this.props.game._id}?_method=DELETE`} method="POST">

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
module.exports = Deletegame;

