const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hanlding GET request of the /codes'
    });
});

router.post('/',(req, res, next)=> {
    res.status(201).json({
        message: 'Handling POST request of the /codes'
    });
});

router.get('/:codeID', (req, res, next) => {
    const id = req.params.codeID;
    res.status(200).json({
        message: 'GET a code with ID',
        ID: id
    });
});

router.patch('/:codeID', (req, res, next) => {
    const id = req.params.codeID;
    res.status(200).json({
        message: 'Code updated!'
    });
});

router.delete('/:codeID', (req, res, next) => {
    const id = req.params.codeID;
    res.status(200),json({
        message: 'Code Deleted!'
    });
});


module.exports = router;