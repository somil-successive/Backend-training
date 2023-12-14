export interface IBlogs {
  title: string;
  body: string;
  likes: Number;
  imageUrl: String;
  categories: String;
  isSensitive: boolean;
  tags: Array<string>;
  writer: {
    id: Number;
    name: string;
    email: string;
    profileUrl: string;
    famousWorks: string;
  };
}
