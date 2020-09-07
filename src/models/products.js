"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../DB/connection");

const Products = sequelize.define(
	"Product",
	{
		productName: Sequelize.STRING,
		productDescription: Sequelize.STRING,
		productVarieties: Sequelize.ARRAY(Sequelize.JSON),
		dateUploaded: Sequelize.DATE,
		dateEdited: Sequelize.DATE,
	},
	{ timestamps: false, freezeTableName: true }
);

module.exports = Products;
