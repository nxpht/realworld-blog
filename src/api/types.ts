// {
//   "article": {
//     "slug": "how-to-train-your-dragon",
//     "title": "How to train your dragon",
//     "description": "Ever wonder how?",
//     "body": "It takes a Jacobian",
//     "tagList": ["dragons", "training"],
//     "createdAt": "2016-02-18T03:22:56.637Z",
//     "updatedAt": "2016-02-18T03:48:35.824Z",
//     "favorited": false,
//     "favoritesCount": 0,
//     "author": {
//       "username": "jake",
//       "bio": "I work at statefarm",
//       "image": "https://i.stack.imgur.com/xHWG8.jpg",
//       "following": false
//     }
//   }
// }

export type Profile = {
  username: string;
  bio: string | null;
  image: string | null;
  following: boolean;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
};

export type ArticlesResponse = {
  articles: Article[];
  articlesCount: number;
};

export type ArticleResponse = {
  article: Article;
};

export type TagsResponse = {
  tags: string[];
};
