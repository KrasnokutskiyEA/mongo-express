import PostService from '../services/PostService.js'
import { handleError } from '../helpers.js'

class PostController {
  async create (req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture)
      res.json(post)
    } catch (e) {
      handleError(res, e)
    }
  }

  async getAll (req, res) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (e) {
      handleError(res, e)
    }
  }

  async getOne (req, res) {
    try {
      const post = await PostService.getOne(req.params.id)
      return res.json(post)
    } catch (e) {
      handleError(res, e)
    }
  }

  async update (req, res) {
    try {
      const updatedPost = await PostService.update(req.body)
      return res.json(updatedPost)
    } catch (e) {
      handleError(res, e)
    }
  }

  async delete (req, res) {
    try {
      const post = await PostService.create(req.params.id)
      return res.json(post)
    } catch (e) {
      handleError(res, e)
    }
  }
}

export default new PostController()
