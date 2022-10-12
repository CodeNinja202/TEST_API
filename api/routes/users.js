const express = require('express');
const router = express.Router();

router.post('/', (reg, res, next) => {
    res.status(200).json({
   message: "Handling GET request of the /users"
    });
});





module.exports = router;