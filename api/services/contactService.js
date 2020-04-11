import Pangolin from '../models/pangolin'
import Contact from '../models/contact'
import { ObjectNotFoundError } from '../helpers/errors'

const build_list = (pangolin_id, pangolins) => {
  let counter = 0
  let list = []
  return new Promise(function(resolve,reject) {
    pangolins.forEach((pangolin, index, array) => {
      Contact.find({'pangolin_id': pangolin.id}).then((contacts) => {
        counter = counter + 1;
        if (contacts.length==0) {
          list.push({'pangolin_id': pangolin.id})
          if (counter == pangolins.length) {
            resolve(list)
          }
        }
      }) 
    })
  })
}

const list_contacts = (pangolin_id, type) => {
  return Pangolin.findById(pangolin_id).then((pangolin) => {
    if (!pangolin) {
      throw new ObjectNotFoundError('Pangolin', pangolin_id)
    }
    else {
      if (type=='current') {
          const contacts = Contact.find({'pangolin_id': pangolin_id})
          return contacts 
      }
      else {
        const contacts = Pangolin.find({}).then(build_list.bind(null, pangolin_id))
        return contacts
      }
    }
  })
}

const create_contact = (contact) => {
  return contact.save().then(() => {
    const status = {'status': 'success'}
    return status
  })
}

const delete_contact = (pangolin_id, contact_id) => {
  return Contact.remove({pangolin_id: pangolin_id,  contact_id: contact_id}).then(() => {
    const status = {'status': 'success'}
    return status
  })
}

module.exports = {
  list_contacts,
  create_contact,
  delete_contact
}