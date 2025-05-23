import { Sequelize } from "sequelize";


export const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: 'mysql2',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Set false only for testing/self-signed certs
    }
  }
});


export const ConnectDB = async () => {
  try {
    await sequelize.authenticate(); // ✅ Test connection
    console.log("✅ DB Connected to Host:", sequelize.config.host);
    await sequelize.sync({ alter: true });

    
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("❌ DB Connection failed:", error);
    process.exit(1); // Exit if connection fails
  }
};