import mongoose from 'mongoose'

// Модель поста

const Post = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String, required: true }
})

export default mongoose.model('Post', Post)
