const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const products = [
    {
        id: 1,
        name: 'Product A',
        price: 100,
        quantity: 10
    },
    {
        id: 2,
        name: 'Product B',
        price: 150,
        quantity: 5
    },
    {
        id: 3,
        name: 'Product C',
        price: 200,
        quantity: 20
    },
];

// Lấy danh sách sản phẩm
app.get("/products", (req, res) => {
    res.json(products);
});

// Lấy chi tiết sản phẩm theo id
app.get("/products/:id", (req, res) => {
    const id = +req.params.id;
    const index = findProductIndex(id);
    if (index !== -1) {
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Thêm sản phẩm mới
app.post("/products", (req, res) => {
    const product = {
        id: (new Date()).getTime(),
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
    };
    products.push(product);
    res.json(product);
});

// Xóa sản phẩm theo id
app.delete("/products/:id", (req, res) => {
    const id = +req.params.id;
    const index = findProductIndex(id);
    if (index !== -1) {
        products.splice(index, 1);
        res.json({ message: 'Product deleted', id: id });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Cập nhật sản phẩm theo id
app.put("/products/:id", (req, res) => {
    const id = +req.params.id;
    const index = findProductIndex(id);
    if (index !== -1) {
        const product = products[index];
        product.name = req.body.name;
        product.price = req.body.price;
        product.quantity = req.body.quantity;
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Hàm tìm index của sản phẩm theo id
function findProductIndex(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return i;
        }
    }
    return -1;
}
