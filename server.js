const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'registrationdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.post('/api/register', (req, res) => {
  const { fullName, mobile, email, childName, grade, address } = req.body;
  const sql = `
    INSERT INTO registrations 
    (full_name, mobile, email, child_name, grade, address)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [fullName, mobile, email, childName, grade, address], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true, registrationId: result.insertId });
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
