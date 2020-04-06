import Pangolin from '../models/pangolin'
import { ObjectNotFoundError } from '../helpers/errors'

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
  	return pangolin.save().then((pangolin) => {
    	return pangolin
  	})
}

const update = (id, data) => {
  return Pangolin.findById(id).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', id)
    }
    return pangolin.save().then((pangolin) => {
    	return pangolin
  	})
  })
}

module.exports = {
  get,
  list,
  create,
  update
}