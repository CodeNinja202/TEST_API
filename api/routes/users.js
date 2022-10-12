const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
   message: "Handling GET request of the /users"
    });
   
});

router.post('/', (req, res, next) => {
    res.status(201).json({
   message: "Handling POST request of the /users"
    });
   
});

router.get('/:userID', (req, res, next) => {
const id = req.params.userID;
if (id === 'admin'){
    res.status(200).json({
        message: 'You are the Admin!',
        ID: id
    });
} else {
    res.status(200).json({
     message: 'You are a standard user',
     ID: id
    });
}

});


router.patch('/:userID', (req, res, next) => {
    const id= req.params.userID;
    // find and update user by id
    res.status(200).json({
        message: 'User Updated!'
    });
});

router.delete('/:userID', (req, res, next) => {
    const id= req.params.userID;
    // find and update user by id
    res.status(200).json({
        message: 'User Deleted!'
    });
});


module.exports = router;