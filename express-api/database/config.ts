import mongoose from "mongoose";

export const dbConfig = () => {
  mongoose.connect("https://mongodb.com", () => {});
};
