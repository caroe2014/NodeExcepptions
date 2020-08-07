const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/kill', (req, res) => {
    console.log(`Node will be killed. Before Killing`)
    process.kill(process.pid, 'SIGTERM')
    res.send(`Node will be killed. After Killing`)
})

app.get('/divide', (req, res) => {
    console.log(`Node will be killed. Before Killing`)
    n = 2/0
    process.kill(process.pid, 'SIGTERM')
    res.send(`Node will be killed. After Killing`)
})



app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}!`)
})
