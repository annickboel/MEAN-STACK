import pangolinService from '../services/pangolinService'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Pangolin from '../models/pangolin'

const list = (req, res, next) => {
  pangolinService.list().
  then((pangolins) => {
    return res.status(200).send(pangolins)
  }).
  catch(error => next(error))
}

const create = (req, res, next) => {
  let pangolin = Pangolin({
    name: req.body.name,
    password: req.body.password,
    family: req.body.family,
    race: req.body.race,
    age: req.body.age,
    food: req.body.food
  });
  if (req.body.password) {
      pangolin.password = bcrypt.hashSync(req.body.password, 10);
  }
  pangolinService.create(pangolin).
  then((status) => {
    const message = {'status': status.status, 'message': 'Pangolin successfully created'}
    return res.status(201).send(message)
  }).
  catch(error => next(error))
}

const get = (req, res, next) => {
  const pangolinId = req.params.id
  pangolinService.get(pangolinId).
  then((pangolin) => {
    return res.status(200).send(pangolin)
  }).
  catch(error => next(error))
}

const update = (req, res, next) => {
  let toUpdate = {
  	id: req.params.id,
    name: req.body.name,
    family: req.body.family,
    race: req.body.race,
    age: req.body.age,
    food: req.body.food
  }
  if (req.body.password) {
      pangolin.password = bcrypt.hashSync(req.body.password, 10);
  }
  pangolinService.update(toUpdate).
  then((status) => {
    const message = {'status': status.status, 'message': 'Pangolin successfully updated'}
    return res.status(200).send(message)
  }).
  catch(error => next(error))
}

const authenticate = function(req, res, next) {
  pangolinService.authenticate(req.body.name, req.body.password).
  then((pangolin) => {
    return res.status(200).send(pangolin)
  }).
  catch(error => next(error))
}

/*const delete = (req, res, next) => {
  const pangolinId = req.params.id
  pangolinService.delete(pangolinId).
  then((status) => {
    const message = {'status': status.status, 'message': 'Pangolin successfully deleted'}
    return res.status(200).send(message)
  }).
  catch(error => next(error))
}*/

module.exports = {
  get,
  list,
  create,
  update,
  authenticate
}
