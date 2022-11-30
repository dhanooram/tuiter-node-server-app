import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  disliked: Boolean,
  dislikes:Number,
  replies:Number,
  retuits:Number,
}, {collection: 'tuits'});
export default schema;

