const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Editmovie extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Movie">
        <div className="big">
          <a href={'/movies'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
        <form 
          action={`/movies/${this.props.movie._id}?_method=PUT`}
          method="POST">
          <br></br>

          <div className="editForm">

            Title:{" "}
            <input type="text" name="title" size="40" defaultValue={this.props.movie.title} />
            <br></br> <br></br>

            Director:{" "}
            <input type="text" name="director" defaultValue={this.props.movie.director} />
            <br /> <br />

            Price:{" "}<br></br>
            <input type="text" name="price" defaultValue={this.props.movie.price} />
            <br></br><br />

            Is Available:{this.props.movie.isAvailable ? (
              <input type="checkbox" name="isAvailable" defaultChecked />
            ) : (
              <input type="checkbox" name="isAvailable" />
            )}
            <br /> <br />

            <input type="submit" id="submitChange"value="Update Movie" />
          </div>
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Editmovie;