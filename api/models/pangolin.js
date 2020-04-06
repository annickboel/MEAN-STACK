// pangolin.js
import mongoose from 'mongoose';

const pangolinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
  }
}, {collection : 'Pangolin'});

let PangolinsModel = mongoose.model('Pangolin', pangolinSchema);


export default PangolinsModel;