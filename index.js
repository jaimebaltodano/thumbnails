const data = require("./mockdata");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Image Slider</h1>')
});

app.get('/api/thumbs', (req, res) => {
    res.json({"success":true, payload:data.MOCKDATA});
});

app.get('/api/thumbs/:id', (req, res) => {
    const id = req.params.id;
    const img = data.MOCKDATA.find(thumb => thumb.id === id);
    if (img) {
        res.json({"success":true, payload:img});
    }else{
        res.status(404).json({"success":false, payload:''}).end();
    }
});

app.get('*', (req, res) =>{
    res.status(404).json({"success":false, payload:''}).end();
  });

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});