const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.mp3')) {
            res.setHeader('Content-Type', 'audio/mpeg');
        }
    }
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`✨ Servidor corriendo en puerto ${PORT}`);
});
