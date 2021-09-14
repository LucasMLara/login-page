const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  return res.json({hello: 'mahfrend'})
})

module.exports = router;