const data = require("./mockdata");
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Image Slider</h1>')
});

app.get('/api/thumbs', (req, res) => {
    res.json(data.MOCKDATA);
});

app.get('/api/thumbs/:id', (req, res) => {
    const id = req.params.id;
    const img = data.MOCKDATA.find(thumb => thumb.id === id);
    if (img) {
        res.json(img);
    }else{
        res.status(404).json('').end();
    }
});

app.get('*', (req, res) =>{
    res.status(404).json('').end();
  });

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});