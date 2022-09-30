//form for users to create a new instance of a Student and save into database

const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Newgame extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Game Page"}>
        <div className="big">
          
          <a href={'/games'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
        
          <form action="/games" method="POST"> 
            <div className="editForm">
              Image:{" "} 
              <input type="text" name="imageUrl" />
              <br />
              Name:{" "} 
              <input type="text" name="name" />
              <br />
              Producer:{" "} 
              <input type="text" name="producer" />
              <br />
              Price:{" "} 
              <input type="text" name="price" />
              <br />
              Is Available : <input type="checkbox" name="isAvailable" />
              <br />
            </div>
            <input type="submit" id="createBook" name="" value="Create Game" />
          </form>
        </div> 
      </DefaultLayout>
    );
  }
}
module.exports = Newgame;