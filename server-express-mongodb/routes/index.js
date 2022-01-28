var express = require("express");
var router = express.Router();

var TodoModel = require("../models/Todos");

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Express" });
// });

// import routes

router.post("/todo/create", async (req, res) => {
  const NEW_TODO = await new Todos({
    name: req.body.name,
    description: req.body.description,
    priority: req.body.priority,
  });

  NEW_TODO.save().then((project) => res.json(project));
});

// router.get(
//   "/todos/list",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     console.log(req.user.id);
//     Users.find().then((foundUser) => {
//       if (foundUser) {
//         console.log(foundUser, "MAYBE");
//         // foundUser is user object
//         // read the UserProjects, filter out the one to be updated, update it, and re-add it
//         res.json(foundUser);
//       } else {
//         res.json({ message: "Error" });
//       }
//     });
//   }
// );

router.get("/todos/list", (req, res) => {
  // console.log(req.user.id);
  TodoModel.find().then((foundTodos) => {
    if (foundTodos) {
      console.log(foundTodos);
      // foundUser is user object
      // read the UserProjects, filter out the one to be updated, update it, and re-add it
      res.json(foundTodos);
    } else {
      res.json({ message: "Error" });
    }
  });
});

router.post("/", function (req, res) {
  res.send("You successfully created a POST route!");
});

router.get("/", function (req, res, next) {
  res.render("people", {
    title: "Schedule Master Users",
    people: [
      {
        name: "John Denver",
        age: "59",
        userID: 682545,
      },
      {
        name: "Doctor Evil",
        age: "118",
        userID: 704352,
      },
      {
        name: "Iron Man",
        age: "38",
        userID: 639863,
      },
      {
        name: "Bernie Sanders",
        age: "84",
        userID: 8538,
      },
      {
        name: "Charlotte Church",
        age: "18",
        userID: 842051,
      },
      {
        name: "Ed Sheeran",
        age: "28",
        userID: 303625,
      },
    ],
  });
});

router.put("/", function (req, res) {
  res.send("You successfully created a PUT route!");
});

router.delete("/", function (req, res) {
  res.send("You successfully created a DELETE route!");
});

module.exports = router;
