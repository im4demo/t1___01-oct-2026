import express from 'express'
import os from "os";

const app = express();
const PORT  = process.env.PORT || 8080;
const DIR = 't1---01-oct-2026';
const UPD = 'SERVER-UPD-8 + GitActions - FINAL \n';

app.get('/', (req, res) => {
    // res.send(`Hello from Server - ${DIR} - ${UPD}`)

    console.log(os.hostname());
    // console.log(os.networkInterfaces());

    // res.send(`Hello from Server - <hr />
    //             <b>Hostname:</b> ${req.hostname} <br> 
    //             <b>OS Hostname:</b> ${os.hostname()} <br> 
    //             <b>PORT:</b> ${PORT} <br> 
    //             <b>IP:</b> ${req.ip} <hr> 
    //             <b>Directory:</b> ${DIR} <br> 
    //             <b>Upd:</b> ${UPD} <br>
    //         `)

    res.send(`Hello from Server - <hr />
                <b>Hostname:</b> ${req.hostname} <br> 
                <b>OS Hostname:</b> ${os.hostname()} <br> 
                <b>PORT:</b> ${PORT} <br> 
                <b>Directory:</b> ${DIR} <br> 
                <b>Upd:</b> ${UPD} <br>
            `)
})


app.listen(PORT, () => {
    console.log(`Server is up & running on port ${PORT} - ${DIR} - ${UPD}`, 'http://localhost:8080')
})

