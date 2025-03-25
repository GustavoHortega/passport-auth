const express =  require('express');

router = express.Router();

router.get('/', (_req, res) => {
    res.json({
        status: 'ok'
    });
});

module.exports = router;