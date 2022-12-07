let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = userController.getUserByEmailIdAndPassword(email, password);
    if (user) {
       req.session.user = user;
       res.redirect("/reminders");
    } else {
      res.redirect("/login");
    }
  },

  registerSubmit: (req, res) => {
    if (userController.getUserByEmailIdAndPassword(email, password)) {
      res.post("/register");
      throw new Error(`User with email ${email} already exists`);
    } else {
      userModel.database[email] = {
      id: Object.keys(userModel.database).length + 1,
      email: email,
      password: password,
    };
    res.redirect("/login");
    }
  },
};

module.exports = authController;
