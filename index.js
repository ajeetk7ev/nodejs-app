import express from 'express';


const app = express();


app.get("/", (req, res) => {
    res.send("App is running fine");
})


app.listen(5000, () => {
    console.log("Server is running at port 5000")
})
