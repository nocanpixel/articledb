import { Sequelize } from "sequelize";
import { sequelize } from "../config/db-config.mjs";

export const Words = sequelize.define("words", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  word: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  article: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  spanish: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  english: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  arabic: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {timestamps:false});
