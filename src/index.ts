import  express from 'express';

const app = express();

const port: any = process.env.Port || 3000;

app.listen(port, () => {
    console.log(`app is listening to port:  ${port}`);
})