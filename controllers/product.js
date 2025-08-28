const Product = require("../models/Product");
const Merek = require("../models/Merek");

const createProduct = async (req, res) => {
  try {
    const { Name, Price, Stock, Deskripsi, merek_id } = req.body;
    console.log(Name);
    const product = await Product.create({ Name, Price, Stock, Deskripsi, merek_id });
    const data = await product.save();
    console.log(data);
    return res.status(201).json({
      status: "success",
      data,
    });
  } catch (err) {
    // console.log(err.message);
    return res.status(500).json({
      status: "false",
      message: "Internal Server Error",
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ success: true, data: products });
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "Internal Server error" });
  }
};
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: "Product Not Found",
      });
    }
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Internal Server error",
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: "Product Not Found",
      });
    }
    product.update(req.body);
    product.save();
    res.status(200).json({
      status: "success",
      message: "Product Successfully Updated",
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Internal Server error",
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: "Product Not Found",
      });
    }
    product.destroy();
    res.status(200).json({
      status: "success",
      message: "Product Successfully Deleted",
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Internal Server error",
    });
  }
};

const createMerk = async (req, res) => {
  try {
    const { Name, Deskripsi } = req.body;

    if (!Name || !Deskripsi) {
      return res
        .status(400)
        .json({ message: "Name dan Deskripsi wajib diisi" });
    }

    const merk = await Merek.create({
      Name,
      Deskripsi,
    });

    res.status(201).json({
      message: "Merek berhasil ditambahkan",
      data: merk,
    });
  } catch (error) {
    console.error("Error createMerk:", error);
    res.status(500).json({
      message: "Terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  createMerk,
};
