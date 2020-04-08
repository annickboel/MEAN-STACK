// contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  pangolin_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {collection : 'contacts'});

let Contact = mongoose.model('Contact', contactSchema);
export default Contact;