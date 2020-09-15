import Request from "./Request";
import PostFetch from "./PostFetch";

/**
 * Request blog Api class
 */
class RequestApi {
  static getPosts(page = 1, limit = 10) {
    return new Request("posts").setParams({ page, limit }).send();
  }

  static getPost(postId) {
    return new Request(`posts/${postId}`).send();
  }

  static deletePost(postId) {
    return new Request(`posts/${postId}`).setMethod("DELETE").send();
  }

  static addPost(fields) {
    console.log("--------------------------", fields);
    const postFetch = new PostFetch(fields);

    return new Request(`posts`).setMethod("POST").setBody(postFetch).send();
  }

  static updatePost(post, postId) {
    return new Request(`posts/${postId}`).setMethod("PUT").setBody(post).send();
  }
}

export default RequestApi;
