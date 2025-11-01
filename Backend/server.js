const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'localpassword02ZA',
    database: 'social_app'
});

app.get('/posts', (req, res) => {
    db.query('SELECT * FROM posts', (err, results) => {
        if (err) {
            return res.status(500).json({error: err});
        }
        res.json(results);
    });
});

app.listen(5000, () => console.log('Backend running on port 5000'));