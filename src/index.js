console.log("Señor, date prisa en socorrerme");

const app = require('./app')
const port = process.env.PORT || 3001
app.listen(port,() => {
    console.log(`server is runnig in port ${port}`);
})