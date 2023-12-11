export interface IBlogs {
  title: string;
  body: string;
  createdAt: Date;
  lastEdited: Date;
  likes: string;
  imageUrl: Buffer;
  categories:Array<String>;
  isSensitive: boolean;
}
