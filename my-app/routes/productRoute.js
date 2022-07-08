const router = require("express").Router();
const Product = require("../models/product");
const auth = require("../middleware/auth");

//CREATE
router.post("/addProduct", auth, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json("product has been added!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update product info
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // DELETE METHOD
router.delete("/:id", auth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT INFO
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const { password, ...others } = product._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCTS
router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  try {
    let products;

    if (qCategory) {
      products = await Product.find({
        categories: {
          $in: qCategory,
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
