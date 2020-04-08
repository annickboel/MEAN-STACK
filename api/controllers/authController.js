import authService from '../services/authService'

const authenticate = function(req, res, next) {
  authService.authenticate(req.body.name, req.body.password).
  then((pangolin) => {
    return res.status(200).send(pangolin)
  }).
  catch(error => next(error))
}

module.exports = {
  authenticate
}
