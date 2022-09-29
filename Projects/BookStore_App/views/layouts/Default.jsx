const { moduleExpression } = require("@babel/types");
const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            {/* <img src="https://cdn.freebiesupply.com/logos/large/2x/golden-books-logo-png-transparent.png" alt="" /> */}
             {/* <title>{this.props.title} </title> */}
            
            {/* <link rel="shortcut icon" href="https://cdn.freebiesupply.com/logos/large/2x/golden-books-logo-png-transparent.png" type="image/x-icon" />  */}
           
          </head>
          <body>
           
            <link rel="stylesheet" href="/css/app.css"/> 
            <h1>
             
                 <div id="parent">
                  <a  href={'/'} id="left">
                     <img  class="logo"src="https://cdn.freebiesupply.com/logos/large/2x/golden-books-logo-png-transparent.png" alt="" />
                  </a>
                  <span id="center">{this.props.title}</span>
                 </div>
            </h1>
            {this.props.children}
          </body>
        </html>
      </>
    );
  }
}
module.exports = DefaultLayout