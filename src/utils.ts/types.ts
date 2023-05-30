interface User {
    did: string;
    handle: string;
  }
  
  interface Post {
    createdAt: number;
    text: string;
    user: string;
  }
  
  interface PostSearchResult {
    tid: string;
    cid: string;
    user: User;
    post: Post;
  }
  