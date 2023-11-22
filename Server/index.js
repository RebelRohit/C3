import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';




const app = express();
const PORT = 8000;

app.use(cors({
  origin:'http://localhost:5173',
  methods:"POST",
  credentials: true
}))


const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'customer_data'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(express.json()); // Corrected this line

app.post('/register', (req, res) => {
  try {
    const { userName, password } = req.body;
    const sql = 'INSERT INTO login (user_id, password) VALUES (?, ?)';

    db.query(sql, [userName, password], (err, result) => {
      if (err) throw err;
      console.log('User registered successfully');
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/login', (req, res) => {
  try {
    const { userName, password } = req.body;
    const sql = 'SELECT * FROM login WHERE user_id = ? AND password = ?';

    db.query(sql, [userName, password], (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      res.json({ message: 'Login successful' });
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/INB', (req, res) => {
  const INB = 'SELECT * FROM inbound_request';
  db.query(INB, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

app.get('/OTB',(req,res)=>{
  const OTB ='SELECT * FROM outbound_request';
  db.query(OTB,(err,result)=>{
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  })
})


app.get('/TEL',(req,res)=>{
  const OTB ='SELECT * FROM tel_dids';
  db.query(OTB,(err,result)=>{
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
