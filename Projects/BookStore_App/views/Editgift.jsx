const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Editgift extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Gift">
        <div className="big">
          <a href={'/gifts'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
        <form 
          action={`/gifts/${this.props.gift._id}?_method=PUT`}
          method="POST">
          <br></br>

          <div className="editForm">

            Name:{" "}
            <input type="text" name="name" size="40" defaultValue={this.props.gift.name} />
            <br></br> <br></br>

            Producer:{" "}
            <input type="text" name="producer" defaultValue={this.props.gift.producer} />
            <br /> <br />

            Price:{" "}<br></br>
            <input type="text" name="price" defaultValue={this.props.gift.price} />
            <br></br><br />

            Is Available:{this.props.gift.isAvailable ? (
              <input type="checkbox" name="isAvailable" defaultChecked />
            ) : (
              <input type="checkbox" name="isAvailable" />
            )}
            <br /> <br />

            <input type="submit" id="submitChange"value="Update Gift" />
          </div>
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Editgift;