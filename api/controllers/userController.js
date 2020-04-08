import userService from '../services/userService'
import User from '../models/user'


const create = (req, res, next) => {
  let toAdd = User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
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
module.exports = {
 create
}