import mongoose from "mongoose";
export const connectDB = () => {
  mongoose
    .connect(process.env.DBURL, {
      dbName: "jwtpractice",
    })
    .then((c) =>
      console.log(
        `DB connected to ${c.connection.host} `
      )
    )
    .catch((e) => console.log(e));
};
