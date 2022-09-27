const express = require("express");
const app = express();

const mongoose = require("mongoose");

const methodOverride = require("method-override");

const bodyParser = require("body-parser");
const Log = require("./Models/logs");

require("dotenv").config();

app.set("view engine", "jsx")

app.engine("jsx", require("express-react-views").createEngine())

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log("I am only here for routes");
  next();
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.get("/logs", (req, res)=>{
  Log.find({},(err, allLogs) =>{
      console.log(err);
      res.render('Index', {
          logs : allLogs
      })
  })
});


app.get('/logs/new', (req, res) => {
    res.render ('New', {})
})

app.post('/logs', (req, res) => {
    if (req.body.isBroken === 'on') {
        req.body.isBroken = true
    }
    else{
        req.body.isBroken = false
    }
    Log.create (req.body, (err, createdLog) => {
        console.log(err)
    })
    res.redirect('/logs')
})

app.get("/logs/:id/edit", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
      //findLog
      console.log(err)
      if (!err) {
        res.render("Edit", {
          log: foundLog,
          //pass in the foundLog so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  //---------> PUT/PATCH [Update]

app.put("/logs/:id", (req, res) => {
    if (req.body.isBroken === "on") {
      req.body.isBroken = true;
    } else {
      req.body.isBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        console.log(err)
      console.log(updatedLog);
      res.redirect(`/logs/${req.params.id}`);
    });
  });
//---------> DELETE [Delete]

app.delete("/logs/:id", (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/logs");
    });
});

//---------> SEEDS

app.get("/logs/seed", (req, res) => {
    console.log(Log)
  Log.create(
    [
      {
        title: "hello",
        date: "3/1/2020",
        entry:"ff",
        isBroken: true,
      },
      {
        title: "new journey",
        date: "4/4/2020",
        entry:"gg",
        isBroken: true,
      },
      {
        title: "ocean",
        date: "2/2/222",
        entry:"hhh",
        isBroken: false,
      },
    ],
    (err, data) => {
      res.redirect("/logs");
    }
  );
});

//---------> Show [Read]

app.get("/logs/:id", (req, res) => {
    Log.findById(req.params.id, (err,foundLog) => {
        console.log(err)
      console.log("Found: ", foundLog);
      res.render("Show", {
        log: foundLog,
      });
    });
});





app.listen("3000", () => {
    console.log("Server operational on port 3000");
});

