const express = require("express");
const app = express();


app.use(express.static('public'))
app.use('/.well-known', express.static('.well-known'));

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
});