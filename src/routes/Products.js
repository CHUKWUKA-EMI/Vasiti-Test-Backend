const express = require("express");
const db = require("../DB/database");

const router = express.Router();

router.get("/products", async (req, res) => {
	try {
		const Products = await db.Product.findAll({ nest: true, raw: true });
		return res.json(Products);
	} catch (error) {
		return res.send(error);
	}
});

router.post("/products", async (req, res) => {
	const {
		productName,
		productDescription,
		productVarieties,
		dateUploaded,
	} = req.body;
	try {
		const Product = await db.Product.create({
			productName: productName,
			productDescription: productDescription,
			productVarieties: productVarieties,
			dateUploaded: new Date(dateUploaded).toUTCString(),
		});
		return res.json(Product);
	} catch (error) {
		return res.send(error);
	}
});

router.put("/product/:id", async (req, res) => {
	const { id } = req.params;
	// const { productVarieties, dateEdited } = req.body;
	try {
		const product = await db.Product.findOne({ where: { id: id } });
		if (product) {
			const updatedProduct = await product.update(req.body);
			return res.json(updatedProduct);
		}

		throw new Error("Product not found");
	} catch (error) {
		return res.send(error);
	}
});

router.delete("/product/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deleted = await db.Product.destroy({ where: { id: id } });
		if (deleted) {
			return res.send("Product deleted");
		}
		throw new Error("Product can not be deleted");
	} catch (error) {
		return res.send(error);
	}
});

module.exports = router;
