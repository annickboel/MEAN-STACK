// pangolin.js
import mongoose from 'mongoose';

const pangolinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true
  }
}, {collection : 'pangolins'});

let Pangolin = mongoose.model('Pangolin', pangolinSchema);
export default Pangolin;