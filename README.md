
```markdown
# Product Management API

## Install dependencies
```bash
$ npm install
```

## Running server
```bash
$ node app.js
```
The server listens at port 3000.

## APIs

### Product model
```json
{
    id: 1,
    name: 'Product A',
    price: 100,
    quantity: 10
}
```

### Getting all products
```http
GET http://localhost:3000/products
```

### Getting a product by id
```http
GET http://localhost:3000/products/1
```

### Creating a product
```http
POST http://localhost:3000/products
```
**Request body:**
```json
{
    "name": "Product D",
    "price": 120,
    "quantity": 15
}
```

### Deleting a product by id
```http
DELETE http://localhost:3000/products/1
```

### Updating a product by id
```http
PUT http://localhost:3000/products/1
```
**Request body:**
```json
{
    "name": "Updated Product A",
    "price": 110,
    "quantity": 12
}
```
```
