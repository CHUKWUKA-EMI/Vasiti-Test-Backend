"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"Product",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				productName: {
					type: Sequelize.STRING,
				},
				productDescription: {
					type: Sequelize.STRING,
				},
				productVarieties: {
					type: Sequelize.ARRAY(Sequelize.JSON),
				},
				dateUploaded: {
					type: Sequelize.DATE,
				},
				dateEdited: {
					type: Sequelize.DATE,
				},
			},
			{ timestamps: false, freezeTableName: true }
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Product");
	},
};
