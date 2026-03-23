const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});