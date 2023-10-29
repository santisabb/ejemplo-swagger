import express from "express";
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send({ message: 'holi mundito, como vamos?' });
});
app.listen(8080, () => {
    console.log('listening on server 8080');
});
//# sourceMappingURL=index.js.map