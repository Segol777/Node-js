import { Schema, model } from 'mongoose'

const tagSchema = new Schema({
  name: { type: String, required: true },
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
});

export const Tag = model("Tag", tagSchema);