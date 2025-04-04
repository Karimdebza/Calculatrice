const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SECRET_KEY = process.env.SECRET_KEY || 'votre_cle_secrete';

exports.signup = async (req, res) => {
  try {
    const { id, password } = req.body;
    if (await User.findOne({ id })) {
      return res.status(400).json({ error: 'Utilisateur déjà existant' });
    }
    const user = new User({ id, password, calculations: [] });
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await User.findOne({ id });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Identifiants incorrects' });
    }
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.signout = async (req, res) => {
  // Pour le signout, côté client il suffit de supprimer le token
  res.json({ message: 'Déconnexion réussie' });
};
