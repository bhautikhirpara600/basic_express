import app from "./src/app.js";
import dotenv from "dotenv";
import { connectDB } from "./src/model/index.js";
dotenv.config();

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
