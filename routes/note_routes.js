module.exports = function(app, db) {
    app.get('/', (req, res) => {
        res.send('Hello')
    });
};