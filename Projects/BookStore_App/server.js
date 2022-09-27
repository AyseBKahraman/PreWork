//-------> Requiring and initializing Express
const express = require("express");
const app = express();

const mongoose = require("mongoose");


const methodOverride = require("method-override");
const Book = require("./Models/books");

require("dotenv").config();

// ------> Creates Link to JSX
app.set("view engine", "jsx")

// -----> Links JSX/ReactViews to App
app.engine("jsx", require("express-react-views").createEngine())

app.use(express.urlencoded({ extended: false }));

//--------->Instantiates methodOverride for CRUD actions
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log("I am only here for routes");
  next();
});

//---------> Establishes middleware process

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

//---------> Index [Dashboard/Show All]

app.get("/books", (req, res) => {
  Book.find({}, (err, allBooks) =>{
    console.log(err)
    res.render('Index', {
        books: allBooks
    })
  })
});

//---------> New [Create]

app.get('/books/new', (req, res) => {
    res.render ('New', {})
})

//---------> POST

app.post('/books', (req, res) => {
    if (req.body.isPassing === 'on') {
        req.body.isPassing = true
    }
    else{
        req.body.isPassing = false
    }
    Book.create (req.body, (err, createdBook) => {
        console.log(err)
    })
    res.redirect('/books')
})

//---------> Edit

app.get("/books/:id/edit", (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
      //findSook
      console.log(err)
      if (!err) {
        res.render("Edit", {
          book: foundBook,
          //pass in the foundSook so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

//---------> PUT/PATCH [Update]

app.put("/books/:id", (req, res) => {
    if (req.body.isPassing === "on") {
      req.body.isPassing = true;
    } else {
      req.body.isPassing = false;
    }
    Book.findByIdAndUpdate(req.params.id, req.body, (err, updatedBook) => {
        console.log(err)
      console.log(updatedBook);
      res.redirect(`/books/${req.params.id}`);
    });
  });

//---------> DELETE [Delete]

app.delete("/books/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/books");
    });
  });

//---------> SEEDS

app.get("/books/seeds", (req, res) => {
    console.log('HERE'+Book)
  Book.create(
    [
      {
      //  imageUrl: "https://prodimage.images-bn.com/pimages/9781435159631_p0_v1_s192x300.jpg",
        title: "Pride and Predicious",
        author: "3.0",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781435159631_p0_v1_s192x300.jpg",
        isPassing: true,
      },
      {
      
        title: "Pride and Predicious",
        author: "3.0",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781435159631_p0_v1_s192x300.jpg",
        isPassing: true,
      },
      
      {
       // imageUrl: "https://prodimage.images-bn.com/pimages/9781435159631_p0_v1_s192x300.jpg",
        title: "Fethullah Kahrman",
        author: "3.0",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781435159631_p0_v1_s192x300.jpg",
        isPassing: false,
      }
    ],
    (err, data) => {
      res.redirect("/books");
    }
  );
});

//---------> Show [Read]

app.get("/books/:id", (req, res) => {
    Book.findById(req.params.id, (err,foundBook) => {
        console.log(err)
      console.log("Found: ", foundBook);
      res.render("Show", {
        book: foundBook,
      });
    });
  });

//-------> Server Now Running

app.listen("3001", () => {
  console.log("Server operational on port 3000");
});