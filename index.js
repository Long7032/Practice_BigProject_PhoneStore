import express from 'express'
import cors from 'cors'
const PORT = 5821;


const app = new express();

app.use(express.json()); // This line approve receive data json from client

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.post("/signUp", async (req, res) => {
    console.log("Server - Sign Up");
    console.log(req.body);
})

app.get("/signIn", async (req, res) => { 
    console.log("Server - Sign In");
    console.log(req.body);

    return res.status(200)
})