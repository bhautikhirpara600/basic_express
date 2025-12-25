import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 18,
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: "Ahmadabad",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

export default User;
