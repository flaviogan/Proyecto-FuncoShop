const mainControllers ={
    home: (req, res)=>res.send('Route for shop view'),
    contact: (req, res)=> res.send('Route for contact view'),
    about: (req, res)=> res.send('Route for about view'),
    faqs: (req, res)=> res.send('Route for faqs view')

}

module.exports = mainControllers;