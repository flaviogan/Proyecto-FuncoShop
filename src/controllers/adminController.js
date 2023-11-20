const adminController ={
    admin: (req, res)=> res.send('Route for admin view'),
    create: (req, res)=> res.send(`Route for create view`),
    create: (req, res)=> res.send(`Route for go to confirm create view`),
    '/edit/:id': (req, res)=> res.send(`Route for find and retrieve a user from an ID: ${req.params.id}` ),
    '/edit/:id': (req, res)=> res.send(`Route for user put from an ID: ${req.params.id}` ),
    '/delete/:id': (req, res)=> res.send('Route for delete for the current item to shop cart')
}

module.exports = adminController;