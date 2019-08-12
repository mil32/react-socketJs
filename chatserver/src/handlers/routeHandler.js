const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("VIVO!").status(200);
});

router.get("/clima", (req, res) => {
    res.send("<h2>CLIMA CHE!</h2>").status(200);
})

module.exports = router;
