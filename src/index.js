//Eliminar después
console.log("Señor, date prisa en socorrerme");

const app = require('./app')

//Levandando el puerto. Configuración para adaptar el puerto en servidor externo
const port = process.env.PORT || 3001
app.listen(port,() => {
    console.log(`server is runnig in port ${port}`);
})