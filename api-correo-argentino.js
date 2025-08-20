const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/proxy/envio', async (req, res) => {
  const { cp } = req.body;
  try {
    const response = await fetch(`https://api.correoargentino.com/envio?cp=${cp}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error al consultar Correo Argentino' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
