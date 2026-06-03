const express = require("express");
const app = express();

app.use(express.static('public', {extensions:['html']}));
app.use('/.well-known', express.static('.well-known'));

app.use((req, res, next) => {
    res.status(404).send("<body><img src='https://http.cat/404' alt='404 Not Found'></body>")
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
});