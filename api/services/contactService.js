import Pangolin from '../models/pangolin'
import Contact from '../models/contact'
import { ObjectNotFoundError } from '../helpers/errors'


const build_contact_list = (contacts, pangolins) => {
  pangolins.forEach((pangolin) => {
      contacts.push({'_id': pangolin.id, 'name': pangolin.name})
  })
  return contacts
}

const list = (pangolin_id, type) => {
  return Pangolin.findById(pangolin_id).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', pangolin_id)
    }
    else {
      if (type=='current') {
          console.log('CURRENT '+pangolin_id)
          const contacts = Contact.find({'pangolin_id': pangolin_id})
          return contacts
          
      }
      else {
        console.log('AVAILABLE '+ pangolin_id)
        let contacts = []
        contacts = Pangolin.find({ '_id': { $ne: pangolin_id } }).then(build_contact_list.bind(null, contacts))
        return contacts
      }
    }

  })
}

module.exports = {
  list
}