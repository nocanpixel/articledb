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
    dialectOptions: {
      ssl: {
        require: true, // Require SSL connection
        rejectUnauthorized: false, // Disable rejecting unauthorized connections (not recommended for production)
      },
    },
  }
);

// Set the character set and collation at the database connection level
sequelize
  .query(
    `ALTER DATABASE ${process.env.DATABASE} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  )
  .then(() => {
    console.log("Character set and collation set successfully.");
  })
  .catch((error) => {
    console.error("Error setting character set and collation:", error);
  });
