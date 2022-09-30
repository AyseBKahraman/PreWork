const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Newmovie extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Movie Page"}>
        <div className="big">
          
          <a href={'/movies'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
        
          <form action="/movies" method="POST"> 
            <div className="editForm">
              Image:{" "} 
              <input type="text" name="imageUrl" />
              <br />
              Title:{" "} 
              <input type="text" name="title" />
              <br />
              Director:{" "} 
              <input type="text" name="director" />
              <br />
              Price:{" "} 
              <input type="text" name="price" />
              <br />
              Is Available : <input type="checkbox" name="isAvailable" />
              <br />
            </div>
            <input type="submit" id="createBook" name="" value="Create Movie" />
          </form>
        </div> 
      </DefaultLayout>
    );
  }
}
module.exports = Newmovie;