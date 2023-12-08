export interface IBlogs {
  title: string;
  body: string;
  createdAt: Date;
  lastEdited: Date;
  likes: string;
  imageUrl: Buffer;
  isSensitive: boolean;
}
