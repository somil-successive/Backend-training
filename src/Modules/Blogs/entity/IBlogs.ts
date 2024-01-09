export interface IBlogs {
  title: string;
  body: {
    description:string,
    links:string
  },
  likes: number;
  approved : boolean,
  imageUrl: string;
  categories: string;
  isSensitive: boolean;
  tags:string;

  writer: {
    id: number;
    name: string;
    email: string;
    profileUrl: string;
    famousWorks: string;
  };
}
