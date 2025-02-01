import { Schema, model, Types } from 'mongoose'

const magazineSchema = new Schema({
  title: { type: String, required: true },
  issueNumber: { type: Number, required: true },
  publisher: { type: Schema.Types.ObjectId, ref: "Publisher" },
});


export const Magazine = model("Magazine", magazineSchema);