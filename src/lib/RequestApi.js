import Request from "./Request";

/**
 * Request blog Api class
 */
class RequestApi {
  static getPosts() {
    return new Request("posts").send();
  }

  static getPost(postId) {
    return new Request(`posts/${postId}`).send();
  }

  static deletePost(postId) {
    return new Request(`posts/${postId}`).setMethod("DELETE").send();
  }

  static addPost(post) {
    return new Request(`posts`).setMethod("POST").setBody(post).send();
  }

  static updatePost(post, postId) {
    return new Request(`posts/${postId}`).setMethod("PUT").setBody(post).send();
  }
}

export default RequestApi;
