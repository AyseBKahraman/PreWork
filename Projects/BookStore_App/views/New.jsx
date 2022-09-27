//form for users to create a new instance of a Student and save into database

const React = require("react");
const DefaultLayout = require("./layouts/Default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Book Page"}>
        <div>
          <form action="/books" method="POST">
      
            <br />
            Title: <input type="text" name="title" />
            <br />
            author: <input type="text" name="author" />
            <br />
            Eligible for Graduation: <input type="checkbox" name="isPassing" />
            <br />
            <input type="submit" name="" value="Create Book" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = New;