const productController = require('./../controllers/products')

module.exports = (app) => {
    app.get('/api/products', productController.index)
    app.post('/api/products', productController.create)
    app.get('/api/products/:id', productController.view)
    app.put('/api/products/:id', productController.edit)
    app.delete('/api/products/:id', productController.delete)
}