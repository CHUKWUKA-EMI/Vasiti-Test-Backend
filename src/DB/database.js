const sequelize = require("./connection");
const Sequelize = require("sequelize");
const Product = require("../models/products");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = Product;

module.exports = db;
