// Home Info Endpoint

const express = require("express")
const v2 = express.Router()

// Returns API Info
v2.get("/", (req, res, next) => {
  global.db.collection("home").find({},{"_id": 0 }).toArray((err, doc) => {
    if (err) {
      return next(err)
    }
    res.json(doc[0])
  })
})

module.exports = v2
