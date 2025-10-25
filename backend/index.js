const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const UserRoutes = require('./routes/UserRoutes');
const PetRoutes = require('./routes/PetRoutes');

const cors = require('cors');

const app = express();

app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Public folder for images
app.use(express.static('public'));

// Routes
app.use('/users', UserRoutes);
app.use('/pets', PetRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})