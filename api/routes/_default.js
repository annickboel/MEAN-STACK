import express from 'express'

const router = express.Router()
// favicon: in case of a request from a web browser
router.get('/favicon.ico', (req, res) => res.status(204).send())
router.get('/health_check', (req, res) => res.status(200).send('I\'m fine.'))

router.all('*', (req, res) => {
  return res.status(404).render('error404', { url: req.url })
})
module.exports = router