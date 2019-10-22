module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get("db");
        db.getProducts().then((inventory) => {
            res.status(200).send(inventory)
        }).catch( err => console.log(err));
    },
    addProduct: (req, res, next) => {
        const {name, price, img} = req.body
        const db = req.app.get("db");
        db.addProduct([name, price, img]).then(inventory => {
            res.status(200).send(inventory)
        }).catch( err => console.log(err));
    }
}