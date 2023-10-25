let express = require("express")
let app = express();
let server = app.listen(1234, function () {
    let port = server.address().port;
    app.use(express.static('.'));
});