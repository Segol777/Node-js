import  { Schema, model } from 'mongoose'

const publisherSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
});

export const Publisher = model("Publisher", publisherSchema);