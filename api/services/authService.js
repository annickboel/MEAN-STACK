import Pangolin from '../models/pangolin'
import { ObjectNotFoundError, AuthenticationFailedError } from '../helpers/errors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const JWT_SECRET = 'ThisIsMySecret'
const JWT_VALIDITY = '1h'

const login = (name, password) => {
  return Pangolin.findOne({ name: name}).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', name)
    }
    if (pangolin && bcrypt.compareSync(password, pangolin.password)) {
      const payload = {'name': pangolin.name }
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_VALIDITY })
      const result = {'pangolin': {'name': pangolin.name, 'access_token': token, 'expires_in': JWT_VALIDITY}}
      return result
    }
    else {
      throw new AuthenticationFailedError('Pangolin', name)
    } 
  })
}

const register = (pangolin) => {
  pangolin.password = bcrypt.hashSync(pangolin.password, 10);
  return pangolin.save().then(() => {
    const payload = {'name': pangolin.name }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_VALIDITY })
    const result = {'pangolin': {'name': pangolin.name, 'access_token': token, 'expires_in': JWT_VALIDITY}}
    return result
   })
}


module.exports = {
  login,
  register
}