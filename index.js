const { response } = require('express')
const express = require('express')

app = express()

app.get('/', (req, res) => {
    res.send('PFA Docker!')
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})