"use strict";
 const Post = use('App/Models/Post')

class PostController {
  async store({ auth, request, response }) {
    const newPost = await Post.create({
      content: request.input('content'),
      user_id: auth.user.id,
      type: 'text'
    })

    return 'posts saved'
  }
  async update() {
    return request.post();
  }
  async destroy() {
    return "destroyed";
  }
}

module.exports = PostController;
