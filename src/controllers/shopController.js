const shopController ={
    shop: (req, res)=> res.send('Route for shop view'),
    '/item/:id': (req, res)=> res.send(`Route for find and retrieve a product from an ID: ${req.params.id}` ),
    '/item/:id/add': (req, res)=> res.send('Route for add for the current item to shop cart'),
    cart: (req, res)=> res.send('Route for cart view'),
    cart: (req, res)=> res.send('Route for got to checkout Page')

}

module.exports = shopController;