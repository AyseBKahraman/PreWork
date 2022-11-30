const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Page">
         <form
          action={`/logs/${this.props.log._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text" name="title" defaultValue={this.props.log.title}
          />
          <br />
          Date:{" "}
          <input type="text" name="date" defaultValue={this.props.log.date} />
          <br />
          Entry:{" "}
          <input type="text" name="entry" defaultValue={this.props.log.entry} />
          <br />
          Is Broken:
          {this.props.log.isBroken ? (
            <input type="checkbox" name="isBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="isBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;