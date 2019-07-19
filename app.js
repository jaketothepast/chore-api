/* Imports */
import express from "express";
import { sequelize, Chore } from "./db/models"

// Start the epxress application.
const app = express()
const port = 3000;

// Get dummy response.
app.get("/", async (req, res) => {
    res.send("Hello world!")
});

// Get a chore from the list
app.get("/chores", async (req, res) => {

});

// Add a chore to the list.
app.post("/chores", async (req, res) => {
    
});

// TODO: /chore/:id endpoint
// TODO - /chore/:id/status endpoint.

app.listen(port, () => {
    console.log("Listening on port " + port);
})
