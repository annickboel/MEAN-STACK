var pangolinService = require("../services/pangolinService");
import Pangolin from '../models/pangolin'

const list = (req, res, next) => {
  pangolinService.list().
  then((pangolins) => {
    return res.status(200).send(pangolins)
  }).
  catch(error => next(error))
}

const create = (req, res, next) => {
  let toAdd = Pangolin({
    name: req.body.name,
    family: req.body.family,
    race: req.body.race,
    age: req.body.age,
    food: req.body.food
  });
  pangolinService.create(toAdd).
  then((pangolin) => {
    return res.status(201).send(pangolin)
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
  let toUpdate = Pangolin({
  	id: req.params.id,
    name: req.body.name,
    family: req.body.family,
    race: req.body.race,
    age: req.body.age,
    food: req.body.food
  });
  pangolinService.update(toUpdate).
  then((pangolin) => {
    return res.status(200).send(pangolin)
  }).
  catch(error => next(error))
}

module.exports = {
  get,
  list,
  create,
  update
}
