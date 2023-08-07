import mongoose from "mongoose";

let isConnected = false; //track connections

export const connectToDB = async () => {
  mongoose.set("strictQuesry", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_promt",
      useNewUrlPArser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
