const express = require('express');
const cors = require('cors');
const req = require('express/lib/request');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Look Mama Book  personal hear took')
});
const users = [
    { id: 1, Name: 'Badsha', Job: 'Student' },
    { id: 2, Name: 'Tamim', Job: 'Student' },
    { id: 3, Name: 'Lega', Job: 'Student' },
    { id: 4, Name: 'Lema', Job: 'Student' },
    { id: 5, Name: 'Fozlu', Job: 'Student' },
    { id: 6, Name: 'Kohenoor', Job: 'Student' },

]
app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = user.length + 1;
    users.push(user);
    res.send(user)

})
app.listen(port, () => {
    console.log('Badsha', port);
})