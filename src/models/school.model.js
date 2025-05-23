import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

export const School = sequelize.define("School", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
 name: {
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
  address:{
    type: DataTypes.STRING,
    allowNull: false 
  }
}, 
  {
    timestamps: true
  }
)