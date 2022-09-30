const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Showmovie extends React.Component {
  render() {
    const {movie}= this.props;
      return (
      <DefaultLayout title={"Movie Profile"}>
        <div>
            <nav>
                <a href="/movies"> Back</a>
            </nav>
          <br></br>
          {movie.title} by {movie.director} {" "}
          {movie.isAvailable
            ? "Is Available to sale"
            : "Is NOT Available to sale"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Showmovie;