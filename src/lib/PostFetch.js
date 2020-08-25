class Post {
  constructor(fields) {
    const { title, short_description } = fields;
    this.title = title;
    this.short_description = short_description;
    this.full_description = "";
    this.status = true;
    this.seo_url = "";
  }
}

export default Post;
