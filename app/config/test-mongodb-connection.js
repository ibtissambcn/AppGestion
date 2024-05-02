// Importer les modules nécessaires

const express = require('express');


const mongoose = require('mongoose');
const { mongoURI } = require('../config/config'); // Assurez-vous d'importer votre URI MongoDB à partir de votre fichier de configuration

// Fonction pour tester la connexion à MongoDB
const testMongoDBConnection = async () => {
  try {
    // Connexion à MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Affichage d'un message si la connexion est réussie
    console.log('Connexion à MongoDB réussie !');

    // Déconnexion de MongoDB après le test
    await mongoose.disconnect();
  } catch (error) {
    // Affichage de l'erreur en cas d'échec de la connexion
    console.error('Erreur lors de la connexion à MongoDB :', error);
  }
};

// Appel de la fonction pour tester la connexion à MongoDB
testMongoDBConnection();
