import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  
  if (!MONGODB_URI) {
    console.error(`MONGODB_URI is not defined in .env`);
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Database Connected..`);
  } catch (error) {
    console.error(`Database connection failed ${error.message}`);
    process.exit(1);
  }
};
