import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
      trim: true,
      max: [50, "Name can not exceed 50 characters"],
    },
    age: {
      type: Number,
      default: 18,
      min: [18, "Age should be greater then 18"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
    },
    role: {
      type: String,
      enum: ["student", "teacher", "employee", "other"],
      default: "other",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Person", personSchema);
