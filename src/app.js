const express = require('express');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// const calcRoutes = require('./routes/calcRoutes');

const app = express();
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://mongo:27017/calculator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error(err));

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/calc', calcRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
