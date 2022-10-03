//-------> Requiring and initializing Express



const express = require("express");
const app = express();

const mongoose = require("mongoose");


const methodOverride = require("method-override");

const Book = require("./Models/books");
const Ebook = require("./Models/ebooks");
const Game = require("./Models/games");
const Gift = require("./Models/gifts");
const Movie = require("./Models/movies");

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
app.get("/games", (req, res) => {
  Game.find({}, (err, allGames) =>{
    console.log(err)
    res.render('Indexgame', {
        games: allGames
    })
  })
});
app.get("/gifts", (req, res) => {
  Gift.find({}, (err, allGifts) =>{
    console.log(err)
    res.render('Indexgift', {
        gifts: allGifts
    })
  })
});
app.get("/movies", (req, res) => {
  Movie.find({}, (err, allMovies) =>{
    console.log(err)
    res.render('Indexmovie', {
        movies: allMovies
    })
  })
});



//---------> New [Create]

app.get('/books/new', (req, res) => {
    res.render ('New', {})
})
app.get('/ebooks/newebook', (req, res) => {
  res.render ('Newebook', {})
})
app.get('/games/newgame', (req, res) => {
  res.render ('Newgame', {})
})
app.get('/gifts/newgift', (req, res) => {
  res.render ('Newgift', {})
})
app.get('/movies/newmovie', (req, res) => {
  res.render ('Newmovie', {})
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
app.post('/games', (req, res) => {
  if (req.body.isAvailable === 'on') {
      req.body.isAvailable = true
  }
  else{
      req.body.isAvailable = false
  }
  Game.create (req.body, (err, createdGame) => {
      console.log(err)
  })
  res.redirect('/games')
})
app.post('/gifts', (req, res) => {
  if (req.body.isAvailable === 'on') {
      req.body.isAvailable = true
  }
  else{
      req.body.isAvailable = false
  }
  Gift.create (req.body, (err, createdGift) => {
      console.log(err)
  })
  res.redirect('/gifts')
})
app.post('/movies', (req, res) => {
  if (req.body.isAvailable === 'on') {
      req.body.isAvailable = true
  }
  else{
      req.body.isAvailable = false
  }
  Movie.create (req.body, (err, createdMovie) => {
      console.log(err)
  })
  res.redirect('/movies')
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
app.get("/ebooks/:id/editebook", (req, res) => {
    Ebook.findById(req.params.id, (err, foundEbook) => {
      console.log(err)
      if (!err) {
        res.render("Editebook", {
          ebook: foundEbook,
          //pass in the foundSook so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
});
app.get("/games/:id/editgame", (req, res) => {
  Game.findById(req.params.id, (err, foundGame) => {
    console.log(err)
    if (!err) {
      res.render("Editgame", {
        game: foundGame,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.get("/gifts/:id/editgift", (req, res) => {
  Gift.findById(req.params.id, (err, foundGift) => {
    console.log(err)
    if (!err) {
      res.render("Editgift", {
        gift: foundGift,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.get("/movies/:id/editmovie", (req, res) => {
  Movie.findById(req.params.id, (err, foundMovie) => {
    console.log(err)
    if (!err) {
      res.render("Editmovie", {
        movie: foundMovie,
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
app.put("/games/:id", (req, res) => {
  if (req.body.isAvailable === "on") {
    req.body.isAvailable = true;
  } else {
    req.body.isAvailable = false;
  }
  Game.findByIdAndUpdate(req.params.id, req.body, (err, updatedGame) => {
      console.log(err)
    console.log(updatedGame);
    res.redirect(`/games/${req.params.id}`);
  });
});
app.put("/gifts/:id", (req, res) => {
  if (req.body.isAvailable === "on") {
    req.body.isAvailable = true;
  } else {
    req.body.isAvailable = false;
  }
  Gift.findByIdAndUpdate(req.params.id, req.body, (err, updatedGift) => {
      console.log(err)
    console.log(updatedGift);
    res.redirect(`/gifts/${req.params.id}`);
  });
});
app.put("/movies/:id", (req, res) => {
  if (req.body.isAvailable === "on") {
    req.body.isAvailable = true;
  } else {
    req.body.isAvailable = false;
  }
  Movie.findByIdAndUpdate(req.params.id, req.body, (err, updatedMovie) => {
      console.log(err)
    console.log(updatedMovie);
    res.redirect(`/movies/${req.params.id}`);
  });
});

//---------> DELETE [Delete]

app.get("/books/:id/delete", (req, res) => {
  Book.findById(req.params.id, (err, foundBook) => {
    console.log(err)
    if (!err) {
      res.render("Delete", {
        book: foundBook,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.delete("/books/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/books");
  });
});
app.get("/ebooks/:id/deleteebook", (req, res) => {
  Ebook.findById(req.params.id, (err, foundEbook) => {
    console.log(err)
    if (!err) {
      res.render("Deleteebook", {
        ebook: foundEbook,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.delete("/ebooks/:id", (req, res) => {
  Ebook.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/ebooks");
  });
});
app.get("/games/:id/deletegame", (req, res) => {
  Game.findById(req.params.id, (err, foundGame) => {
    console.log(err)
    if (!err) {
      res.render("Deletegame", {
        game: foundGame,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.delete("/games/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/games");
  });
});
app.get("/gifts/:id/deletegift", (req, res) => {
  Gift.findById(req.params.id, (err, foundGift) => {
    console.log(err)
    if (!err) {
      res.render("Deletegift", {
        gift: foundGift,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.delete("/gifts/:id", (req, res) => {
  Gift.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/gifts");
  });
});
app.get("/movies/:id/deletemovie", (req, res) => {
  Movie.findById(req.params.id, (err, foundMovie) => {
    console.log(err)
    if (!err) {
      res.render("Deletemovie", {
        movie: foundMovie,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.delete("/movies/:id", (req, res) => {
  Movie.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/movies");
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
        copy:"3",
        isAvailable: true,
      },
      {
      
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781435159587_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        price: "$11.99",
        copy:"1",
        isAvailable: true,
      },
      
      {
        title: "East of Eden",
        author: "John Steinbeck",
        imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780140186390_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        price: "$10.99",
        copy:"7",
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
      copy: "3",
      isAvailable: true,
    },
    {
    
      title: "A Broken Blade",
      author: "Melissa Blair",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781454947882_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$11.99",
      copy: "3",
      isAvailable: true,
    },
  ],
  (err, data) => {
    res.redirect("/ebooks");
  }
);
});

app.get("/games/seeds", (req, res) => {
  console.log(Game)
Game.create(
  [
    {
      name: "Night Cage Strategy Game",
      producer: "Smirk & Dagger",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/0894769000216_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$39.99",
      isAvailable: true,
    },
    {
      name: "Dune: Imperium Strategy Game",
      producer: "Dire Wolf",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/0810058800008_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$29.99",
      isAvailable: true,
    },
  ],
  (err, data) => {
    res.redirect("/games");
  }
);
});
app.get("/gifts/seeds", (req, res) => {
  console.log(Gift)
Gift.create(
  [
    {
      name: "Beaded Bookmark - A Wise Woman Once Said",
      producer: "Peter Pauper Press, Incorporated",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781441334992_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$9.99",
      isAvailable: true,
    },
    {
      name: "Beaded Bookmark - You Fell Asleep Here",
      producer: "Peter Pauper Press, Incorporated",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781441334381_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$2.99",
      isAvailable: true,
    },
  ],
  (err, data) => {
    res.redirect("/gifts");
  }
);
});
app.get("/movies/seeds", (req, res) => {
  console.log(Movie)
Movie.create(
  [
    {
      title: "The Fog",
      director: "John Carpenter",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/0826663228779_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$29.99",
      isAvailable: true,
    },
    {
      title: "Top Gun: Maverick",
      director: "Joseph Kosinski",
      imageUrl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/0032429343352_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      price: "$32.99",
      isAvailable: true,
    },
  ],
  (err, data) => {
    res.redirect("/movies");
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
    res.render("Showebook", {
    ebook: foundEbook,
    });
  });
});
app.get("/games/:id", (req, res) => {
  Game.findById(req.params.id, (err,foundGame) => {
    console.log(err)
    console.log("Found: ", foundGame);
    res.render("Showgame", {
    game: foundGame,
    });
  });
});
app.get("/gifts/:id", (req, res) => {
  Gift.findById(req.params.id, (err,foundGift) => {
    console.log(err)
    console.log("Found: ", foundGift);
    res.render("Showgift", {
    gift: foundGift,
    });
  });
});
app.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id, (err,foundMovie) => {
    console.log(err)
    console.log("Found: ", foundMovie);
    res.render("Showmovie", {
    movie: foundMovie,
    });
  });
});


//-------> Server Now Running

app.listen("3001", () => {
  console.log("Server operational on port 3000");
});