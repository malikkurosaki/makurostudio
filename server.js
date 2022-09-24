const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.static('./site'))

app.get('/assets/img/:name', (req, res) => {
    const name = req.params.name;
    const fl = path.join(__dirname, './asssets/images/' + name);
    if (fs.existsSync(fl)) {
        res.sendFile(fl)
    }else{
        res.sendFile(path.join(__dirname, './asssets/images/default.png'))
    }
})

app.listen(port, () => console.log(`server berjalan di port ${port}`))