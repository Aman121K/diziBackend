const express = require('express')
const morgan = require('morgan');
const app = express()
const port = 3000

// body parser 

app.use(express.json());
app.use(morgan('default'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("get request is>>", req.body)
    res.send(req.body)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})