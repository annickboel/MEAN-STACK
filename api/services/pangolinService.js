import Pangolin from '../models/pangolin'
import { ObjectNotFoundError, AuthenticationFailedError } from '../helpers/errors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const get = (id) => {
  return Pangolin.findById(id).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', id)
    }
    return pangolin
  })
}

const list = () => {
  return Pangolin.find({}).then((pangolins) => {
    return pangolins
  })
}

const create = (pangolin) => {
  	return pangolin.save().then(() => {
      const status = {'status': 'success'}
    	return status
  	})
}

const update = (pangolin) => {
  const pangolinId = pangolin.id
  const data = {
    name: pangolin.name,
    password: pangolin.password,
    family: pangolin.family,
    race: pangolin.race,
    age: pangolin.age,
    food: pangolin.food,
    //updated_at: new Date(Date.now)
  }
  return Pangolin.findByIdAndUpdate(pangolin.id, data, { new: true }).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', pangolinId)
    }
    return pangolin.update().then(() => {
      const status = {'status': 'success'}
      return status
    })
  })
}

const authenticate = (name, password) => {
  return Pangolin.findOne({ name: name}).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', name)
    }
    if (pangolin && bcrypt.compareSync(password, pangolin.password)) {
      const status = {'status': 'success', 'token': jwt.sign({ sub: pangolin._id }, "Thisismyscretkey")}
      return status
    }
    else {
      throw new AuthenticationFailedError('Pangolin', name)
    } 
  })
}

const delete = (id) => {
  return Pangolin.remove({_id: id}).then(()) => {
    const status = {'status': 'success'}
    return status
  }
}

module.exports = {
  get,
  list,
  create,
  update,
  delete,
  authenticate
}