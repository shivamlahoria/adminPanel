const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const {onRegister} = require("./controllers/user-register");
const {onLogin} = require("./controllers/user-login");
const {onAdminLogin} = require("./controllers/admin-login");

const {getUsersData,getUserData} = require("./controllers/users");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//FrontEnd Routes

app.get("/", function(req, res) { //Home Route
    res.sendFile(__dirname + "/index.html");
});

app.get("/adminlogin", function(req, res) { 
    res.sendFile(__dirname + "/adminlogin.html");
});

app.get("/login",function(req, res) { 
    res.sendFile(__dirname + "/login.html");
});

//BackEnd Routes

app.post("/", function(req, res){
    const params = req.body;
    onRegister(params);
    res.send("You are successfully registered!");
});

app.get("/users", function(req, res){
    res.send(getUsersData());
});

app.get("/user/:username", function(req, res){
    const username = req.params.username;
    const user = getUserData(username);
    res.send(user);
}); //ask

app.post("/login", function(req, res){
    var loggedInUsername = req.body.username;
    const params = req.body;
    onLogin(params);
    res.send("User  " + loggedInUsername + "successfully Logged In!");
});

app.post("/admin/dashboard", function(req, res){
    const params = req.body;
    if (onAdminLogin(params)){
        res.sendFile(__dirname + "/adminpanel.html");
    } else {
        res.status(400).send("Invalid username/password");
    }
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

