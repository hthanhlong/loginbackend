const data = require("../MOCK_DATA.json");

class ProductController {
  getProduct(req, res) {
    const id = req.params.id;
    const result = data.products.find((x) => x.id === id);
    res.json(result);
  }

  pagination(req, res, next) {
    const page = req.query.page; // so trang hien tai
    const limit = req.query.limit; // limit la so item trong 1 trang

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = data.products.slice(startIndex, endIndex);
    res.send(result);
  }
}
module.exports = new ProductController();
