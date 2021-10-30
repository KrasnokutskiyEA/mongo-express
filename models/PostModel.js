import mongoose from 'mongoose'

// Модель поста

const PostModel = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String, required: true }
})

export default mongoose.model('PostModel', PostModel)
