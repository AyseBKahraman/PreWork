//form for users to create a new instance of a Student and save into database

const React = require("react");
const DefaultLayout = require("./layouts/Default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Book Page"}>
        
          <form action="/books" method="POST">
            
            
            Image:{" "} <br></br>
            <input type="text" name="imageUrl" />
            <br /><br />
            Title:{" "} <br></br>
            <input type="text" name="title" />
            <br /><br />
            Author:{" "} <br></br>
            <input type="text" name="author" />
            <br /><br />
            Price:{" "} <br></br>
            <input type="text" name="price" />
            <br /><br />
            Is Available : <input type="checkbox" name="isAvailable" />
            <br /><br /> 
            
            <input type="submit" id="createBook" name="" value="Create Book" />
            
          </form>
        
      </DefaultLayout>
    );
  }
}
module.exports = New;