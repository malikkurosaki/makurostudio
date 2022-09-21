const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static('./site'))
app.listen(port, () => console.log(`server berjalan di port ${port}`))