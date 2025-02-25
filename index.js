import { registerRootComponent } from 'expo';
import App from './App';
import express from 'express';

registerRootComponent(App);
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello,Deployment Succesfull');
});

app.listen(PORT, () => {
    console.log('Sever is running on port ${PORT}');
});