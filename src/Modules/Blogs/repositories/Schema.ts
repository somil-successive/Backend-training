import mongoose from "mongoose";
import { IBlogs } from "../entity/IBlogs";

const schema = new mongoose.Schema<IBlogs>(
  {
    title: {
      type: String,
      required: true,
    },
    body:{
      description:{type:String, required:true},
      links:{type: String}
    },
    imageUrl: { type: String },
    categories: {
      type: String,
      enum: ["travel", "study", "fitness", "lifestyle", "sports"],
      default: "sports",
      lowercase: true,
    },
    likes:{type:Number},
    approved : {type :Boolean, required :true},
    isSensitive: {
      type: Boolean,
      default: false,
      required: true,
    },
    tags: { type: [String] },
    writer: {
      id: { type: String },
      name: { type: String },
      email: { type: String },
      profilePicUrl: { type: String },
      famousWorks: { type: String },
    },
    
  },
  
  {
    timestamps: true,
  }
);


// const getRandomCategory = () => {
//   const categories = ["travel", "finance", "fitness", "lifestyle", "sports"];
//   const randomIndex = Math.floor(Math.random() * categories.length);
//   return categories[randomIndex];
// };

// const generateRandomData = (index:number) => ({
//   title: `Title ${index + 1}`,
//   body: `This is the body of blog ${index + 1}.`,
//   imageUrl: `https://example.com/image${index + 1}.jpg`,
//   categories: getRandomCategory(),
//   likes: Math.floor(Math.random() * 100),
//   isSensitive: Math.random() < 0.5, // 50% chance of being true
//   tags: [`tag${index + 1}_1`, `tag${index + 1}_2`, `tag${index + 1}_3`],
//   writer: {
//     id: `writer${index + 1}_id`,
//     name: `Writer ${index + 1}`,
//     email: `writer${index + 1}@example.com`,
//     profilePicUrl: `https://example.com/writer${index + 1}.jpg`,
//     famousWorks: `Famous work of Writer ${index + 1}`,
//   },
// });

// const generateCSV = (entries:number) => {
//   let csv = 'title,body,imageUrl,categories,likes,isSensitive,tags,writer.id,writer.name,writer.email,writer.profilePicUrl,writer.famousWorks\n';

//   for (let i = 0; i < entries; i++) {
//     const data = generateRandomData(i);
//     csv += Object.values(data).map(value => `"${value}"`).join(',') + '\n';
//   }

//   return csv;
// };

// const numberOfEntries = 500000;
// const csvData = generateCSV(numberOfEntries);

// fs.writeFileSync('bulkBlogs.csv', csvData, 'utf8');











export const model = mongoose.model("Blogs", schema);

export const bulkModel = mongoose.model("BulkUploads", schema);
