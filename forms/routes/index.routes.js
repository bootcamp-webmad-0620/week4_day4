module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/vuelos', require('./flights.routes.js'))
}