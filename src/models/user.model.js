import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email:{
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  longitude:{
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  latitude:{
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
}, 
  {
    timestamps: true
  }
)