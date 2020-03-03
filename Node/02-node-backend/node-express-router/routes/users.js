const express = require("express");
const router = express.Router();

router.get("/userunderserver", (req, res) => {
    res.send('<h1>User page</h1>')
})

router.get("/profile", (req, res) => {
    res.send('<h1>User profile</h1>')
})

// -----28.02.20
router.get("/about", (req, res) => {
    res.send('<h1>User about</h1>')
})




module.exports = router;
