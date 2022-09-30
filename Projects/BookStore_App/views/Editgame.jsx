const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Editgame extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Game">
        <div className="big">
          <a href={'/games'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
        <form 
          action={`/games/${this.props.game._id}?_method=PUT`}
          method="POST">
          <br></br>

          <div className="editForm">

            Name:{" "}
            <input type="text" name="name" size="40" defaultValue={this.props.game.title} />
            <br></br> <br></br>

            Producer:{" "}
            <input type="text" name="producer" defaultValue={this.props.game.author} />
            <br /> <br />

            Price:{" "}<br></br>
            <input type="text" name="price" defaultValue={this.props.game.price} />
            <br></br><br />

            Is Available:{this.props.game.isAvailable ? (
              <input type="checkbox" name="isAvailable" defaultChecked />
            ) : (
              <input type="checkbox" name="isAvailable" />
            )}
            <br /> <br />

            <input type="submit" id="submitChange"value="Update Game" />
          </div>
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Editgame;