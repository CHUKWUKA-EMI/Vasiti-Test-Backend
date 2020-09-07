const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	"abyteuuh",
	"abyteuuh",
	"wX7_03uwoerbVCNZWoUSr0A87SBf4Cpm",
	{
		host: "lallah.db.elephantsql.com",
		dialect: "postgres",
		port: 5432,
	}
);

module.exports = sequelize;
