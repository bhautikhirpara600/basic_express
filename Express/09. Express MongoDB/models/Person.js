import mongoose from "mongoose";

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
// });

// const personSchema = new mongoose.Schema(
//   {
//     name: { type: String, require: true },
//     age: { type: Number, require: true },
//     email: { type: String, require: true, unique: true },
//     userOrder: { type: Object, default: { test: "test value" } },
//   },
//   { timestamps: true }
// );

const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    userOrder: { type: Object, default: {} },
  },
  { timestamps: true, minimize: false }
);

export const Person = mongoose.model("Person", personSchema);
