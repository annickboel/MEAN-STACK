import Pangolin from '../models/pangolin'
import { ObjectNotFoundError, AuthenticationFailedError } from '../helpers/errors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import JWT_SECRET from   '../constants/jwt'

const authenticate = (name, password) => {
  return Pangolin.findOne({ name: name}).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', name)
    }
    if (pangolin && bcrypt.compareSync(password, pangolin.password)) {

      console.log(JWT_SECRET)
      const status = {'status': 'success', 'token': jwt.sign({ sub: pangolin._id }, 'ThisIsMySecret')}
      return status
    }
    else {
      throw new AuthenticationFailedError('Pangolin', name)
    } 
  })
}

module.exports = {
  authenticate
}