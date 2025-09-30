const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Testar conexão com o banco
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ 
      message: 'Conexão com PostgreSQL estabelecida com sucesso!',
      timestamp: result.rows[0].now 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rotas
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
