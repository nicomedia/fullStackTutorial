module.exports = (app) => {
    app.post('/register', (req,res) => {
        res.send({
            message: 'ok ' + req.body.email
        })
    })
}