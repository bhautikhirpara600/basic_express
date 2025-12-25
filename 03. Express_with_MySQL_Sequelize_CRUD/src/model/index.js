import sequelize from "../config/database.js";
import User from "./user.model.js";

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected.");

    await sequelize.sync();
    console.log("Model synced.");
  } catch (error) {
    console.error(`DB Connection Error:: ${error.message}`);
  }
};

export { connectDB, User };
