export interface IBlogs {
  title: string;
  body: string;
  createdAt: Date;
  lastEdited: Date;
  likes: string;
  imageUrl: String;
  categories:String;
  isSensitive: boolean;
  writer:{
    name:string,
    profileUrl:string,
    famousWorks:string


  }
}
