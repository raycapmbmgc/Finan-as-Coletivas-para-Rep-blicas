const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('grupos');
});

module.exports = router;