const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const mockUserData = [
    {name: "Jane"},
    {name: "John"}
]

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'Successfully got users. Nice !',
        users: mockUserData
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.get('/elijah', (req, res) => {
    res.json({
        success: true,
        message: "elijah is a node.js developer"
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const mockUsername = 'pizzTheFunny'
    const mockPassword = 'topSecret'

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: "username and password match",
            token: "encrypted token gos here"
        })
    } else {
        res.json({
            success: false,
            message: "username and pasword do not match"
        })
    }
})

app.listen(8000, () => {console.log("server running ...")})