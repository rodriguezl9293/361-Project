const express = require('express')
const app = express()

// path for rendering html files
const path = require("path")

// static files to enable css to show
app.use(express.static("public"))


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./public/contact.html"));
})


app.listen(3000)