import contactService from '../services/contactService'
import Pangolin from '../models/pangolin'

const list = (req, res, next) => {
  console.log('PANGOLIN CONTACTS LIST '+req.params.pangolin_id)
  console.log('PANGOLIN CONTACTS LIST TYPE '+ req.query.type)
  const pangolin_id = req.params.pangolin_id;
  const type  = (req.query.type == null) ? 'current' : req.query.type
  contactService.list(pangolin_id, type).then((contacts) => {
    console.log(contacts)
    return res.status(200).send(contacts)
  }).
  catch(error => next(error))
}

module.exports = {
  list
}
