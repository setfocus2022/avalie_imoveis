const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mercadopago = require('mercadopago');
const dotenv = require('dotenv');

dotenv.config();
mercadopago.configure({ access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN });

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/criar-preferencia', async (req, res) => {
  const { items } = req.body;
  const preference = {
    items,
    back_urls: {
      success: 'URL_SUCCESS',
      failure: 'URL_FAILURE',
      pending: 'URL_PENDING',
    },
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    console.error('Erro ao criar preferência de checkout:', error);
    res.status(500).json({ error: 'Erro ao criar preferência de checkout' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});