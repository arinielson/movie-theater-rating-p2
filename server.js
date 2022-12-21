const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Leave a review about your experience at our theater!');
});

app.listen(3000, () => {
    console.log("Movie theater reviews app listening on port 3000");

});

