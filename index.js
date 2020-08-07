const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to Node API Test application: /throw /divide /handledivide /hello  /hola')
})

app.get('/throw', (req, res) => {
    console.log(`Node will be killed. Before Killing`)
    throw new Error('MY new thrown error ********************************')
    res.send(`Node will be killed. After Killing`)
})

app.get('/divide', (req, res) => {
    console.log(`Node will be stopped right here`)
    throw new Error('MY new thrown error ********************************')
    process.kill(process.pid, 'SIGTERM')
    res.send(`Node will be killed. After Killing`)
})


app.get('/handledivide', (req, res) => {
    n = 0
    try
    n = 2/0
    catch(e) {
        //exception handled here   
        console.log(e.message);  
    } 
    res.send(`Node handled exception.`)
})


app.get('/hello', (req, res) => {
    console.log(`Node will say Hello.`)
    res.send('Hello World!')
})

app.get('/hola', (req, res) => {
    console.log(`Node will say Hola.`)
    res.send('Hola Mundo !')
})

app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}!`)
})
