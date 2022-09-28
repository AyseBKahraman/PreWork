//-------> Requiring and initializing Express



const express = require("express");
const app = express();

const mongoose = require("mongoose");


const methodOverride = require("method-override");

const Book = require("./Models/books");
const Ebook = require("./Models/ebooks");

require("dotenv").config();

// ------> Creates Link to JSX
app.set("view engine", "jsx")

// -----> Links JSX/ReactViews to App
app.engine("jsx", require("express-react-views").createEngine())

app.use(express.static('public')); 

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
app.get('/', (req, res) => {
  res.render('Main');
});
app.get("/books", (req, res) => {
  Book.find({}, (err, allBooks) =>{
    console.log(err)
    res.render('Index', {
        books: allBooks
    })
  })
});
app.get("/ebooks", (req, res) => {
  Ebook.find({}, (err, allEbooks) =>{
    console.log(err)
    res.render('Indexebook', {
        ebooks: allEbooks
    })
  })
});



//---------> New [Create]

app.get('/books/new', (req, res) => {
    res.render ('New', {})
})
app.get('/ebooks/new', (req, res) => {
  res.render ('New', {})
})

//---------> POST

app.post('/books', (req, res) => {
    if (req.body.isAvailable === 'on') {
        req.body.isAvailable = true
    }
    else{
        req.body.isAvailable = false
    }
    Book.create (req.body, (err, createdBook) => {
        console.log(err)
    })
    res.redirect('/books')
})
app.post('/ebooks', (req, res) => {
  if (req.body.isAvailable === 'on') {
      req.body.isAvailable = true
  }
  else{
      req.body.isAvailable = false
  }
  Ebook.create (req.body, (err, createdEbook) => {
      console.log(err)
  })
  res.redirect('/ebooks')
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
    if (req.body.isAvailable === "on") {
      req.body.isAvailable = true;
    } else {
      req.body.isAvailable = false;
    }
    Book.findByIdAndUpdate(req.params.id, req.body, (err, updatedBook) => {
        console.log(err)
      console.log(updatedBook);
      res.redirect(`/books/${req.params.id}`);
    });
});

app.put("/ebooks/:id", (req, res) => {
  if (req.body.isAvailable === "on") {
    req.body.isAvailable = true;
  } else {
    req.body.isAvailable = false;
  }
  Ebook.findByIdAndUpdate(req.params.id, req.body, (err, updatedEbook) => {
      console.log(err)
    console.log(updatedEbook);
    res.redirect(`/ebooks/${req.params.id}`);
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
        title: "Pride and Predicious",
        author: "Jane Austen",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781435159631_p0_v1_s192x300.jpg",
        price: "$13.99",
        isAvailable: true,
      },
      {
      
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781435159587_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        price: "$11.99",
        isAvailable: true,
      },
      
      {
        title: "East of Eden",
        author: "John Steinbeck",
        imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780140186390_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        price: "$10.99",
        isAvailable: false,
      }
    ],
    (err, data) => {
      res.redirect("/books");
    }
  );
});

app.get("/ebooks/seeds", (req, res) => {
  console.log(Ebook)
Ebook.create(
  [
    {
      title: "The Lost Girls of Willowbrook",
      author: "Ellen Marie Wiseman",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781496715890_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$13.99",
      isAvailable: true,
    },
    {
    
      title: "A Broken Blade",
      author: "Melissa Blair",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781454947882_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$11.99",
      isAvailable: true,
    },
  ],
  (err, data) => {
    res.redirect("/ebooks");
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

app.get("/ebooks/:id", (req, res) => {
  Ebook.findById(req.params.id, (err,foundEbook) => {
      console.log(err)
    console.log("Found: ", foundEbook);
    res.render("Show", {
      ebook: foundEbook,
    });
  });
});


//-------> Server Now Running

app.listen("3001", () => {
  console.log("Server operational on port 3000");
});