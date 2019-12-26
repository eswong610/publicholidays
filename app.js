const express = require('express');
const path= require('path');
const cors = require('cors')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));