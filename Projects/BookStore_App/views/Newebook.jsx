//form for users to create a new instance of a Student and save into database

const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Newebook extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New EBook Page"}>
        <div className="big">
          
          <a href={'/ebooks'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
        
          <form action="/ebooks" method="POST"> 
            <div className="editForm">
              Image:{" "} 
              <input type="text" name="imageUrl" />
              <br />
              Title:{" "} 
              <input type="text" name="title" />
              <br />
              Author:{" "} 
              <input type="text" name="author" />
              <br />
              Price:{" "} 
              <input type="text" name="price" />
              <br />
              Is Available : <input type="checkbox" name="isAvailable" />
              <br />
            </div>
            <input type="submit" id="createBook" name="" value="Create EBook" />
          </form>
        </div> 
      </DefaultLayout>
    );
  }
}
module.exports = Newebook;