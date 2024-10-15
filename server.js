const express=require("express");
const crypto =require("crypto-js");
const bodyParser=require("body-parser")
const app=express()
const port=3000;

app.use(express.static('public')); // Serve static files from 'public' folder
app.use(bodyParser.json());


app.post('/', (req, res) => {
    try {
        const { value } = req.body;

        if (!value || typeof value !== 'string') {
            return res.status(400).json({
                error: 'Invalid input. Please provide a valid string.'
            });
        }

        const hash = crypto.SHA256(value).toString();

        res.json({ hash, value });
    } catch (err) {
        console.error('Error while generating hash:', err);
        res.status(500).json({
            error: 'An error occurred while processing your request. Please try again later.'
        });
    }
});





app.listen(port,()=>{
    console.log(`Hashify listining on port ${port}`);
});

