import { ApplicationError } from '../helpers/errors'

export default (err, req, res, next) => {
  if (!err.hasOwnProperty('name')) {
    err = new ApplicationError(err.stack || null, 500)
  }
  res.status(err.status || 500).send(err)
}
