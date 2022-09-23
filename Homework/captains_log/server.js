const express = require("express");
const app = express();

const methodOverride = require("method-override");

app.set("view engine", "jsx")

app.engine("jsx", require("express-react-views").createEngine())

app.get('/new', (req, res) => {
    res.render ('New', {})
})


app.listen("3000", () => {
    console.log("Server operational on port 3000");
});

