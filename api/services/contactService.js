import Pangolin from '../models/pangolin'
import Contact from '../models/contact'
import { ObjectNotFoundError } from '../helpers/errors'


const build_contact_list = (contacts, pangolins) => {
  pangolins.forEach((pangolin) => {
      contacts.push({'pangolin_id': pangolin.id})
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
          const contacts = Contact.find({'pangolin_id': pangolin_id})
          return contacts 
      }
      else {
        console.log('AVAILABLE '+ pangolin_id)
        let contacts = []
        //const contacts = Contact.find({'pangolin_id': pangolin_id})
        contacts = Pangolin.find({ '_id': { $ne: pangolin_id } }).then(build_contact_list.bind(null, contacts))
        return contacts
      }
    }

  })
}

const create = (contact) => {
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


const test_function = () => {
  const result = {'status': 'success'}
  return result
}

const test = () => {
  const result = {'status': 'success'}
  return result
}




/*const delete = (pangolin_id, contact_id) => {
  return Contact.findOne({'pangolin_id': pangolin_id, 'contact_id': contact_id).then((contact) => {
    if (!contact) {
      throw new ObjectNotFoundError('Contact', contact_id)
    }
    const status = {'status': 'success'}
    return status
  })
}*/



module.exports = {
  list,
  create,
  delete_contact
}