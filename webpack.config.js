import webpack from "webpack";
import dotenv from "dotenv";
dotenv.config();

export default {
  // other configurations...
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
