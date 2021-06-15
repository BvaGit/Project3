const express = require('express');
const userRouter = require('./routers/user.router');

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`server started ${PORT}`));