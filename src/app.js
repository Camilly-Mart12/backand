const express = require("express")

const testRoutes = require("./routes/testRoutes")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("api da locatoura funcionando!")
})

app.use("test", testRoutes)

module.exports = app