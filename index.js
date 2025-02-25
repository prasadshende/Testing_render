import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello,Deployment Succesfull');
});

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`);
});