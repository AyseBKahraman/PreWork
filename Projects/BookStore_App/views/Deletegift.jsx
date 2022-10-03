const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Deletegift extends React.Component {
  render() {
    return (
      <DefaultLayout title="Delete Gift">
        <div className="big">
          <a href={'/gifts'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>

          <form 
            action={`/gifts/${this.props.gift._id}?_method=DELETE`} method="POST">

            <div className="editForm">
              <p id="areyousure">Are you sure you want to delete this item? </p>
              <input type = 'submit' id="submitChange" value = 'Delete Gift' ></input>
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Deletegift;

