module.exports = {
    HOST: "database-1.cublzvaa9da0.us-east-2.rds.amazonaws.com",
    USER: "postgres",
    PASSWORD: "123123123",
    DB: "userdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };