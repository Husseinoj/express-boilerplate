import express from 'express';

const app = express();
const port = 30000;
app.get("*", (req, res) => {
    res.status(200).json({
        message:"server is ok"
    })
})
app.listen(port, ()=> console.log(`server running on http://localhost:${port}`));