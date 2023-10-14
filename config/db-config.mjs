import { Sequelize } from "sequelize";

import { config } from "dotenv";
config();

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    // dialectOptions: {
    //   ssl: {
    //     require: true, // Require SSL connection
    //     rejectUnauthorized: false, // Disable rejecting unauthorized connections (not recommended for production)
    //   },
    // },
  }
);
